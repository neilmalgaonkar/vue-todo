<style lang="scss" src="./scss/todo.scss"></style>
<template>
    <section class="todoapp">
        <Header />
        <section class="main">
            <div>
                <input id="toggle-all" class="toggle-all" type="checkbox" @click="markAllComplete">
                <label for="toggle-all">Mark all as complete</label>
            </div>
            <router-view />
        </section>
        <Footer />
    </section>
</template>

<script>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';

import _ from 'lodash';

export default {
    name: 'TodoMVC',
    data() {
        return {
            items: this.$store.state.items,
            currentFilter: this.$store.state.currentFilter
        };
    },
    components: {
        Footer,
        Header
    },
    methods: {
        markAllComplete: function () {
            this.$store.dispatch('markAllComplete');
        }
    }
}
</script>