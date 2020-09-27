<template>
    <div class="about">
        <h1>This is an about page</h1>
        <button @click="addClick">点击click</button>
        <div>
            <p>foo.count : {{ foo.count }}</p>
            <p>data.count : {{ data.count }}</p>
            <p>newState.count : {{ count }}</p>
            <input v-model="demoValue" />
            <p>shallowRefState.value : {{ shallowRefState }}</p>
            <p>triggerRefState.value : {{ triggerRefState.text }}</p>
        </div>

        <!-- <midde>
            <template v-slot:slot="{names}" style="display: block;">
                <h2>this is midden slov---------------{{names}}</h2>
            </template>
            <template v-slot:header style="display: block;">
                <h1>Here might be a page title</h1>
            </template>
        </midde> -->

    </div>
</template>

<script>
    import * as _vue from "vue";
    export default {
        name: "about",
        data() {
            return {
                header: "header"
            }
        },
        comments: {
            midde: _vue.defineAsyncComponent(() => import("./midde.vue"))
        },
        setup(props) {
            const foo = { count: 0 }
            const data = _vue.reactive(foo)
            const state = _vue.reactive({ count: 0, is: true })
            const { count } = _vue.toRefs(state) //可以在不失去响应式的情况下破坏结构
            const demoValue = createCustomRef("v-model 解析")
            const addClick = () => {
                foo.count++
                data.count++
                count.value++
                state.is = !state.is
                shallowRefState.value.gets++
                log(_vue.toRaw(data), _vue.toRaw(foo), count.value);
            }
            const shallowRefState = _vue.shallowRef({})
            shallowRefState.value = {}
            shallowRefState.value.gets = 0

            const triggerRefState = _vue.shallowRef({ text: "hello Vue" })
            // _vue.watchEffect(() => { log(triggerRefState.value.text, "watchEffect triggerRefState") })
            triggerRefState.value.text = "hello world!"
            // _vue.triggerRef(triggerRefState, "triggerRefState")

            // _vue.watchEffect((onIncallback) => { log(data.count, "data-------------", state.count, "state") })
            // _vue.watch([() => data.count, () => state.count], (newArr, oldArr) => { log(newArr, "newArr", "---------", oldArr, "oldArr") })

            return { data, foo, addClick, count, demoValue, shallowRefState, triggerRefState }

            //ref 的防抖设置
            function createCustomRef(value, time = 200) {
                let timeout = null;
                return _vue.customRef((track, trigger) => {
                    return {
                        get() {
                            track()
                            return value
                        },
                        set(newValue) {
                            clearTimeout(newValue)
                            timeout = setTimeout(() => {
                                value = newValue
                                trigger()
                            }, time)
                        }
                    }
                })
            }

        },
    };
</script>