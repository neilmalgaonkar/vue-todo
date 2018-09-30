<template>
    <footer class="footer">
        <!-- This should be `0 items left` by default -->
        <span class="todo-count"><strong>{{ getTodoCount }}</strong> item left</span>
        <!-- Remove this if you don't implement routing -->
        <ul class="filters">
            <li>
                <a v-bind:class="isSelectedFilter('all')" href="#/" @click="changeFilter('all')">All</a>
            </li>
            <li>
                <a v-bind:class="isSelectedFilter('active')" href="#/active" @click="changeFilter('active')">Active</a>
            </li>
            <li>
                <a v-bind:class="isSelectedFilter('completed')" href="#/completed" @click="changeFilter('completed')">Completed</a>
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
        isSelectedFilter: function(filter) {
            return {
                selected: this.$store.state.currentFilter == filter
            }
        },
        clearComplete: function () {
            this.$store.dispatch('clearCompleted');
        }
    }
}
</script>