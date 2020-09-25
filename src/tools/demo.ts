export default {
    install:(app,options)=>{
        //属性
        app.config.globalProperties.$key="55684"
        //指令
        app.directive('abs',{})
        //混入
        app.mixin({})
    }
}