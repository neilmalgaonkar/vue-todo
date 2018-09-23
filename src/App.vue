<style lang="scss" src="./scss/todo.scss"></style>
<template>
    <section class="todoapp">
        <Header v-on:addItem="addItem" />
        <section class="main">
            <div>
                <input id="toggle-all" class="toggle-all" type="checkbox">
                <label for="toggle-all">Mark all as complete</label>
            </div>
            <List v-bind:items="getItems"
                v-on:deleteItem="deleteItem"/>
        </section>
        <Footer 
            v-bind:currentFilter="currentFilter"
            v-on:changeFilter="changeFilter"
            v-on:clearAllTasks="clearAllTasks"
            v-bind:totalTasks="totalItems"/>
    </section>
</template>

<script>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import List from './components/List.vue';

import _ from 'lodash';

export default {
    name: 'TodoMVC',
    data() {
        return {
            items: [
            ],
            currentFilter: 'all'
        };
    },
    components: {
        Footer,
        Header,
        List
    },
    computed: {
        getItems: function() {
            if (this.currentFilter == 'all') {
                return this.items;
            }
            const filteredItems = [];
            _.each(this.items, (item) => {
                if (this.currentFilter === 'completed' && item.checked) {
                    filteredItems.push(item);
                } else if (this.currentFilter === 'active' && !item.checked) {
                    filteredItems.push(item);
                }
            });
            return filteredItems;
        },
        totalItems: function () {
            if (this.currentFilter == 'all') {
                return this.items.length;
            }
             const filteredItems = [];
            _.each(this.items, (item) => {
                if (this.currentFilter === 'completed' && item.checked) {
                    filteredItems.push(item);
                } else if (this.currentFilter === 'active' && !item.checked) {
                    filteredItems.push(item);
                }
            });
            return filteredItems.length;
        }
    },
    methods: {
        addItem: function (taskText) {
            const taskObject = {
                task: taskText,
                checked: false
            };
            this.items.push(taskObject);
        },
        deleteItem: function (itemIndex) {
           this.items = [
                ...this.items.slice(0, itemIndex),
                ...this.items.slice(itemIndex+1)
           ];
        },
        changeFilter: function (filter) {
            console.log("Filter is ", filter)
            this.currentFilter = filter;
        },
        clearAllTasks: function () {
            _.each(this.items, function (item) {
                item.checked = false;
            });
        }
    }
}
</script>