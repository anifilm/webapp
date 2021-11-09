import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import mixins from './mixin';

const app = createApp(App);
app.use(router);
app.mixin(mixins); // mixin 전역 등록
app.mount('#app');
