import { createApp } from 'vue'
import App from './App.vue'
import ToDoItem from './components/ToDoItem.vue';

createApp(App)
    .component('ToDoItem', ToDoItem)
    .mount('#app')