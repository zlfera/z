import { createApp } from "vue";
import { createPinia } from "pinia";
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import { getZlf } from "./apis/getZlf";
const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");

getZlf().then((res) => console.log(res.data));
