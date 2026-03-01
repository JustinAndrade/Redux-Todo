import React from 'react';
import { connect } from 'react-redux';

import { addTodo, toggleCompleted } from '../actions'

import './todolist.css'


class TodoList extends React.Component {
    state = {
        newValue: ''
    }
    
    openModal = e => {
        const modal = document.getElementById('todo-modal');
        modal.style.display = 'block'
    }

    closeModal = e => {
        const closeModal = document.getElementById('todo-modal')
        closeModal.style.display = 'none'
    }

    handleChanges = e => {
        this.setState({
            newValue: e.target.value
        })
    }

    addValue = e => {
        e.preventDefault();
        const closeModal = document.getElementById('todo-modal');
        closeModal.style.display = 'none';
        this.props.addTodo(this.state.newValue)
        this.setState({ newValue: '' })
    }

    toggleCompleted = id => {
        this.props.toggleCompleted(id)
    }

    render() {
        return (
            <>
                <div className='todo-list-wrapper'>
                    <button onClick={this.openModal} id='modalBtn' className='button'>Add a Task</button>
                    <div id='todo-modal'>
                        <div className='todo-content'>
                            <span onClick={this.closeModal} className='closeBtn'>&times;</span>
                            <form>
                                <input
                                    type='tex\'
                                    value={this.state.todo}
                                    onChange={this.handleChanges}
                                    placeholder='Add a New Task'
                                    onSubmit={this.addValue}
                                />
                            <button className='addBtn' onClick={this.addValue}>Add Task</button>
                            </form>
                        </div>
                    </div>
                    {this.props.todos.map((todo, index) => (
                        <div className='todo'>
                        <h4 onClick={() => this.toggleCompleted(todo.id)} key={todo.id}>
                            {todo.value}
                            {todo.completed && <i className="fas fa-check-circle"/>}
                        </h4>
                        </div>
                    ))}
                </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(
    mapStateToProps,
    { addTodo, toggleCompleted }
)(TodoList)