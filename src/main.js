import { createApp } from "vue";
import App from "./App.vue";
import "./styles/Base.css";

import "./core/Styles/_base.css";
import "./core/Styles/_icon.css";
import "./core/Styles/_animations.css";

import "primeicons/primeicons.css";
import PrimeVue from "primevue/config";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import router from "./router/index.js";
import RouterPrefetch from "vue-router-prefetch";

const app = createApp(App);

app.use(PrimeVue);

app.use(router);
app.use(RouterPrefetch);

app.mount("#app");
