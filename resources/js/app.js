import './bootstrap';
import '../css/app.css';
import 'aos/dist/aos.css';

import App from './components/App.vue'
import {createApp} from "vue";
import router from './router.js'

// createApp(App).mount("#app")
// App.use(router)

const app = createApp(App)
app.mount('#app')
app.use(router)
