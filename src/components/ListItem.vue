<template>
    <li v-bind:class="{ completed: item.checked }">
        <div class="view">
            <input class="toggle" type="checkbox" v-model="item.checked"
            @change="changeEvent">
            <label>{{ item.task }}</label>
            <button class="destroy" @click="$emit('deleteItem', index)"></button>
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
    methods: {
        changeEvent: function ($event) {
            this.item.checked = $event.target.checked;
        }
    }
}
</script>