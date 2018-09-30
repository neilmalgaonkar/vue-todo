<template>
    <footer class="footer">
        <!-- This should be `0 items left` by default -->
        <span class="todo-count"><strong>{{ getTodoCount }}</strong> item left</span>
        <!-- Remove this if you don't implement routing -->
        <ul class="filters">
            <li>
                <router-link v-on:click.native="changeFilter('all')" :to="{ path: '/' }" active-class="selected" exact>All</router-link>
            </li>
            <li>
                <router-link v-on:click.native="changeFilter('active')" :to="{ path: '/active' }" active-class="selected" exact>Active</router-link>
            </li>
            <li>
                <router-link v-on:click.native="changeFilter('completed')" :to="{ path: '/completed' }" active-class="selected" exact>Completed</router-link>
            </li>
        </ul>
        <!-- Hidden if no completed items are left ↓ -->
        <button class="clear-completed" @click="clearComplete">Clear completed</button>
    </footer>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'Footer',
    props: [
        'currentFilter',
        'totalTasks'
    ],
    computed: {
        ...mapGetters([
            'getTodoCount'
        ]),
    },
    methods: {
        changeFilter: function (filter) {
            this.$store.dispatch('changeFilter', filter)
        },
        clearComplete: function () {
            this.$store.dispatch('clearCompleted');
        }
    }
}
</script>