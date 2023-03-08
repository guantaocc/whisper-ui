import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

import WhisterUI from '@whisper-ui/components';

const app = createApp(App);

app.use(WhisterUI);

app.mount('#app');
