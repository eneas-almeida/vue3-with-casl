<template>
    <div>
        <Product />
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Product from './components/Product.vue';

@Options({
    components: {
        Product,
    },
})
export default class App extends Vue {}
</script>

<style></style>
