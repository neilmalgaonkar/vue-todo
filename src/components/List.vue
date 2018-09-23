<template>
    <ul class="todo-list">
        <ListItem 
            v-for="(item, index) in items" 
            v-bind:item="item"
            v-bind:index="index"
            v-on:deleteItem="$emit('deleteItem', index)"/>
    </ul>
</template>
<script>
import ListItem from './ListItem.vue';

export default {
    name: 'TodoList',
    props: [
        'items'
    ],
    components: {
        ListItem
    },
}
</script>