import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Vue3SuperTour from "vue3-super-tour";

import "vue3-super-tour/dist/vue3-super-tour.css";

const app = createApp(App);

app.use(router);
app.use(Vue3SuperTour);

app.mount("#app");
