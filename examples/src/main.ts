import { createApp } from 'vue'
// @ts-ignore-next
import VueSelect from '../../src/index.vue'
import App from './App.vue'
import route from './route'
import store from './store'
import '../../src/element-plus.css'
import ApiReferenceLink from './components/api-reference-link.vue'

createApp(App).component('vue-select', VueSelect).component('api', ApiReferenceLink).use(route).use(store).mount('#app')
