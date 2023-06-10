import './assets/tailwind.css'
import App from './App.svelte'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

AOS.init({
  once: true
});

const app = new App({
  target: document.getElementById('app'),
})

export default app
