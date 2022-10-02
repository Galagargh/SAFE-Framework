import './bootstrap';
import '../css/app.css';
import App from './components/App.vue'
import {createApp} from "vue";
import router from './router.js'

// createApp(App).mount("#app")
// App.use(router)

const app = createApp(App)
app.use(router)
app.mount('#app')
