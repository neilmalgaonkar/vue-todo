<template>
    <header class="header">
        <h1>todos</h1>
        <input 
            class="new-todo"
            placeholder="What needs to be done?" 
            autofocus
            @keyup.enter="onEnter">
    </header>
</template>

<script>
export default {
    name: 'Header',
    methods: {
        onEnter: function ($event) {
            const taskObject = {
                task: $event.target.value,
                checked: false
            };
            this.$store.dispatch('addTask', taskObject);
            $event.target.value = "";
        }
    }
}
</script>