import { createApp } from "vue";
import Buefy from 'buefy';
import 'buefy/dist/css/buefy.css';
import App from './App.vue';
import router from './router';

createApp(App).use(Buefy).use(router).mount('#app');
