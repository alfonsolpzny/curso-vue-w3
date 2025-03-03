import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'

import App from './App.vue'
import FoodItems from './components/FoodItem.vue'
import AnimalCollection from './components/AnimalCollection.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/animals', component: AnimalCollection },
        { path: '/food', component: FoodItems },
    ]
});

const app = createApp(App)

app.use(router);


app.mount('#app')
                  