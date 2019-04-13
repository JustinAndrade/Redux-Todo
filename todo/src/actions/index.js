export const ADD_TODO = 'ADD_TODO';
export const addTodo = value => {
    return {
        type: ADD_TODO,
        payload: value
    };
};

export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';
export const toggleCompleted = id => {
    return {
        type: TOGGLE_COMPLETED,
        payload: id
    }
}