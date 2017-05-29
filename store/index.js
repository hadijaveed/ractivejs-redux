import { createStore } from 'redux';
import Actions from './actions';


const defaulTask = {
    title: '',
    comments: [],
    labels: []
};

const defaultState = {
    tasks: [],
    showDetailForId: null,
    showDetail: false
};

function Task(state = {}, action) {
    switch (action.type) {
        case 'Add_Task':
            return {
                id: action.id,
                comments: [],
                labels: [],
                title: action.title
            };
        default:
            return state;
    }
}


function TaskCard(state = defaultState, action) {
    switch (action.type) {
        case 'Add_Task':
            return Object.assign({}, state, {
                tasks: [
                    ...state.tasks,
                    Task(undefined, action)
                ]
            });
        case 'Show_Task_Detail':
            return Object.assign({}, state, {
                showDetailForId: action.taskId,
                showDetail: true
            });
        case 'Hide_Task_Detail':
            return Object.assign({}, state, {
                showDetail: false
            });
        default:
            return state;
    }
}

const Store = createStore(TaskCard);

export { Store, Actions };
