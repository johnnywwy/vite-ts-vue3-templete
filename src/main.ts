
import { createApp } from "vue";
import App from "./App.vue";
import router from '@/router';
import './styles/reset.css'
import pinia from '@/store'
const app = createApp(App);
app.use(router);
app.use(pinia);
app.mount('#app');