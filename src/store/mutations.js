export default {
    addTask: function (state, taskObj) {
        state.items.push(taskObj);
    },
    toggleTask: function (state, index) {
        const task = state.items[index];
        task.checked = !task.checked;
        state.items[index] = task;
    },
    deleteTask: function (state, item) {
        state.items.splice(state.items.indexOf(item), 1);
    },
    changeFilter: function (state, filter) {
        state.currentFilter = filter;
    }
};