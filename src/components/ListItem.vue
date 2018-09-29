<template>
    <li v-bind:class="isCompeted">
        <div class="view">
            <input class="toggle" type="checkbox" :value="item.checked" :checked="item.checked" @change="toggleTask">
            <label>{{ item.task }}</label>
            <button class="destroy" @click="deleteItem"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>
</template>

<script>
export default {
    name: 'ListItem',
    props: [
        'item',
        'index'
    ],
    computed: {
        isCompeted: function () {
            return {
                completed: this.item.checked 
            };
        }
    },
    methods: {
        toggleTask: function ($event) {
            this.$store.dispatch('toggleTask', this.index);
        },
        deleteItem: function ($event) {
            this.$store.dispatch('deleteTask', this.item);
        }
    }
}
</script>