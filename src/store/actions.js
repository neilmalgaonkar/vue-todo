export default {
    addTask: function ( { commit }, task ) {
        commit('addTask', task);
    },
    toggleTask: function ( { commit }, index ) {
        commit('toggleTask', index);
    },
    deleteTask: function ( { commit }, item ) {
        commit('deleteTask', item);
    },
    changeFilter: function ( { commit }, filter ) {
        commit('changeFilter', filter);
    },
    clearCompleted: function ( { state, commit } ) {
        state.items
            .filter(item => item.checked)
            .forEach((item) => {
                commit('deleteTask', item);
            });
    },
    markAllComplete: function ({ state, commit }) {
        state.items.forEach((item, index) => {
            if (!item.checked) {
                commit('toggleTask', index);
            }
        })
    }
}