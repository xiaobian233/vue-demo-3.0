import * as Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

(function(window) {
  function log(...str) {
    console.log(...str);
  }
  window.log = log;
})(window);

const app = Vue.createApp(App)
  .use(store)
  .use(router)
  .mount("#app");

app.$.appContext.config.globalProperties.$red = "red";
export const $proto = app.$.appContext.config.globalProperties;
export const $app = app;
