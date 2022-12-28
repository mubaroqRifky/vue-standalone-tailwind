import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import store from "./store";
import Plugins from "./plugins";
import mixin from "./helper";

import "./assets/scss/main.scss";

const app = createApp(App);

for (const key in Plugins) {
    app.use(Plugins[key]);
}

app.use(router);
app.use(store);
app.mixin(mixin);

app.mount("#app");
