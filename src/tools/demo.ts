export default {
    install: (app, options) => {
        //属性
        app.config.globalProperties.$key = "55684"
        //指令
        app.directive('abs', {
            beforeMount(el, bind, vnode, oldnode) { },
            mounted() { },
            beforeUpdate() { },
            updated() { },
            beforeUnmount() { },
            unmounted() { }
        })
        //混入
        app.mixin({
            created(){
                // log(this.$options,"$red-MiXin")
            }
        })
    }
}