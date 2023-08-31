import './app.css'
import App from './app.svelte'

const root = document.getElementById('app');

if (!root) throw new Error('Root not found');

const app = new App({
  target: root,
})

export default app
