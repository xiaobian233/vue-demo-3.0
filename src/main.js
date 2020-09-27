import * as Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import demo from "./tools/demo.ts";

(function (window) {
  function log(...str) {
    console.log(...str);
  }
  window.log = log;
})(window);


log(process.env.VUE_APP_URL, "VUE_APP_URL=beta")

const app = Vue.createApp(App)
  .use(store)
  .use(router)
  .use(demo)
  .mount("#app");

app.$.appContext.config.globalProperties.$red = "red";

// app.$.appContext.mixins.hellow="vue";

// app.$.appContext.directives.myDirective = {
//   mounted(el, bind, vnode) {
//     log(el, bind, vnode, "this");
//   },
// };

export const $proto = app.$.appContext.config.globalProperties;
export const $appContext = app.$.appContext;
export const $app = app;
