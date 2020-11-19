<template>
    <div class="product-detail w-3/4 mx-auto flex">
        <div class="p-4 flex-1">
            <img :src="product.image" class="w-full"/>
        </div>
        <div class="p-4 flex-1">
            {{ product.name }}
            <br>
            {{ product.category }}
            <br>
            {{ product.price }}
            <hr>
            {{ product.description }}
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            product: []
        }
    },
    mounted(){
        this.loadProduct();
    },
    methods: {
        loadProduct(){
            this.$axios.$get("https://my-json-server.typicode.com/ezmemoar/shop-db/products/" + this.$route.params.product)
            .then(data => this.product = data);
        }
    }
}
</script>