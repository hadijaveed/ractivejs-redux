let currentId = 0;

function addTask(task) {
    return Object.assign(task, {
        type: 'Add_Task',
        id: currentId++
    });
}

function showTaskDetail(taskId) {
    return {
        type: 'Show_Task_Detail',
        taskId
    };
}

function hideTaskDetail() {
    return {
        type: 'Hide_Task_Detail'
    };
}

export default { addTask, showTaskDetail, hideTaskDetail };
