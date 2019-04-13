import React from 'react';
import { connect } from 'react-redux';

import { addTodo, toggleCompleted } from '../actions'

class TodoList extends React.Component {
    state = {
        newValue: ''
    }
    
    handleChanges = e => {
        this.setState({
            newValue: e.target.value
        })
    }

    addValue = e => {
        e.preventDefault();
        this.props.addTodo(this.state.newValue)
        this.setState({ newValue: '' })
    }

    toggleCompleted = id => {
        this.props.toggleCompleted(id)
    }

    render() {
        return (
            <div className='todo-list-wrapper'>
                {this.props.todos.map((todo, index) => (
                    <h4 onClick={() => this.toggleCompleted(todo.id)} key={todo.id}>
                        {todo.value}
                        {todo.value && <i class="fas fa-check-circle"/>}
                    </h4>
                ))}
            </div>
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