import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/tailwind.css'

// Vue Animations
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();        

import Particles from "particles.vue3";

createApp(App)
  .use(Particles)
  .mount("#app");
