<template>
    <div class="about">
        <h1>This is an midde page</h1>
        <slot name="slot" :slot="names"></slot>
        <header>
            <slot name="header"></slot>
        </header>
        <!-- <slot></slot> -->
        <!-- <slot></slot> -->
    </div>
</template>

<script>
    import * as _vue from "vue";
    export default {
        name: "midde",
        setup(props) {
            const names = "v-slot"
            return { names }
        },
    };
</script>