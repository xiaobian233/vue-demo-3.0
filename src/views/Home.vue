<template>
<div class="home">
    <h2>this is my Vue child home</h2>
    <h3 style="text-align: center; width: 100vw">
        Vue Component URl : https://composition-api.vuejs.org/zh/api.html
    </h3>
    <br />
    <div>
        <button style="cursor: pointer" @click="addCount">点击count变化</button>
        <p ref="refEl">reactive: {{ state.count }}</p>
        <p>ref: {{ refSate }}</p>
        <p>refObj: {{ objState.const }}</p>
        <p>computed: {{ computedState }}</p>
        <p>unref: {{ uref }}</p>
        <p>markRaw : {{ markRawState.count }}</p>
        <p>toRawState : {{ toRawState.count }}</p>
        <p v-my-directive:myDirective="222">directive</p>
    </div>
</div>
</template>

<script lang="ts">
import * as _vue from "vue";
import * as _router from "vue-router";
import * as _vuex from "vuex";
import * as app from "../main";
export default {
    name: "Home",
    directives: {
        myDirective: {
            mounted(el, bind, vnode) {
                log(el, bind, vnode, "directives");
            },
        },
    },
    setup(props, ctx) {
        const state = _vue.reactive({
            count: 1,
        });
        const refSate = _vue.ref(1);
        const objState = _vue.ref({
            const: 1,
        }).value;
        const computedState = _vue.computed(
            () => state.count + refSate.value + objState.const
        );
        const addCount = function () {
            state.count++;
            refSate.value++;
            objState.const++;
            markRawState.count++;
            toRawState.count++;
            // uref++
            log(refEl, "refEl");
            log(markRawState.count, "markRawState.count");
            log(uref, "uref");
            if (state.count >= 20) stop();
        };
        const stop = _vue.watchEffect((onInCallback) => {
            onInCallback(() => {
                setTimeout(() => {
                    log(state.count, "onInCallback");
                }, 30);
            });
        });
        // const injectStr = inject(ThemeSymbol, "light")
        const refEl = _vue.ref(null);
        const markRawState = _vue.markRaw({
            count: 1,
        });
        const uref = _vue.unref(markRawState);
        const toRawState = _vue.toRaw(state);

        _vue.onBeforeMount(() => {
            // console.log("this is onBeforeMount");
        });
        _vue.onMounted(() => {
            log(_router.useRouter(), "useRouter");
            log(_router.useRoute(), "useRoute");
            log(_router.useLink(props), "useLink");
            log(_router.RouterLink, "RouterLink");
            log(_router, "_router");
            // log(app.$proto.$red, "$red");
            log(app, "app:root:2.0");
            log(_vue, "_vue:root:3.0");
            // console.log("this is onMounted");
        });
        _vue.onBeforeUpdate(() => {
            // console.log("this is onBeforeUpdate");
        });
        _vue.onUpdated(() => {
            // console.log("this is onUpdated");
        });
        _vue.onBeforeUnmount(() => {
            // console.log("this is onBeforeUnmount");
        });
        _vue.onUnmounted(() => {
            // console.log("this is onUnmounted");
        });
        return {
            state,
            refSate,
            objState,
            computedState,
            addCount,
            refEl,
            uref,
            markRawState,
            toRawState,
        };
    },
};
</script>
