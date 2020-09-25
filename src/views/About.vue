<template>
<div class="about">
    <h1>This is an about page</h1>
</div>
</template>

<script>
const ThemeSymbol = Symbol();
import {
    provide,
    onMounted,
    inject
} from "vue";
export default {
    setup(props) {
        // const injectStr = inject(ThemeSymbol, "brak");
        // return {
        //     injectStr,
        // };
        onMounted(() => {
            provide(ThemeSymbol, "brak");
        });
    },
};
</script>
