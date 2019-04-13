import { ADD_TODO } from '../actions';

const initialState = {
    todos: [
        { value: 'Walk the dog.', completed: false },
        { value: 'Create TodoList.', completed: true}

    ]
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
        return  {
            ...state,
            value: action.payload    
         };
        default:
        return state;
    }
};