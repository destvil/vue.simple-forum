import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App'

import Home from './components/Home'
import SignIn from "./components/SignIn";
import Topics from "./components/Topics";
import SignUp from "./components/SignUp";
import Topic from "./components/Topic";
import NewTopic from "./components/NewTopic";

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
    { path: '/', component: Home },
    { path: '/signin', component: SignIn },
    { path: '/signup', component: SignUp },
    { path: '/section/:sectionId', component: Topics },
    { path: '/topic/:topicId', component: Topic },
    { path: '/topic/new', component: NewTopic }
];

const router = new VueRouter({
    routes
})

new Vue({
    router: router,
    render: h => h(App)
}).$mount('#app')
