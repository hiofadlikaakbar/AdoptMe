import { createApp } from "vue";
import "./style.css";
import { autoAnimatePlugin } from "@formkit/auto-animate/vue";
import App from "./App.vue";

createApp(App).use(autoAnimatePlugin).mount("#app");
