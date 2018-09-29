export default {
    getFilteredTodos: function ( { items, currentFilter } ) {
        if (currentFilter === 'all') {
            return items;
        } else if (currentFilter === 'active') {
            return items.filter( item => !item.checked );
        } else {
            return items.filter( item => item.checked );
        }
    },
    getTodoCount: function ( { items } ) {
        return items.filter( item => !item.checked ).length;
    }
};