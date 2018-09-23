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
            const text = $event.target.value;
            this.$emit('addItem', text);
            $event.target.value = "";
        }
    }
}
</script>