import { ADD_TODO, TOGGLE_COMPLETED } from '../actions';

const initialState = {
    todos: [
        { value: 'Walk the dog.', completed: false, id: 0 },
        { value: 'Create TodoList.', completed: false, id: 1}

    ]
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
             ...state,
             todos: [
                 ...state.todos,
                 { value: action.payload, completed: false, id: Date.now() }
             ]   
            };
        case TOGGLE_COMPLETED:
            return {
                ...state,
                todos: state.todos.map( todo => {
                    if (todo.id === action.payload) {
                        return {
                            ...todo,
                            completed: !todo.completed
                        };
                    } else {
                        return todo;
                    }
                })
            };
            default:
                return state;
    }
};