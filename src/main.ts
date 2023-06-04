import { createApp } from 'vue';
import App from './App.vue';
import { abilitiesPlugin } from '@casl/vue';
import ability from './services/ability';
import { createPinia } from 'pinia';

createApp(App)
    .use(createPinia())
    .use(abilitiesPlugin, ability, {
        useGlobalProperties: true,
    })
    .mount('#app');
