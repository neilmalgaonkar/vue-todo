<template>
    <ul class="todo-list">
        <ListItem 
            v-for="(item, index) in getFilteredTodos" 
            v-bind:item="item"
            v-bind:index="index"
            v-bind:key="index" />
    </ul>
</template>
<script>
import { mapGetters } from 'vuex';

import ListItem from './ListItem.vue';

export default {
    name: 'TodoList',
    props: [
        'items'
    ],
    components: {
        ListItem
    },
    computed: {
        ...mapGetters([
            'getFilteredTodos'
        ]),
    },
}
</script>