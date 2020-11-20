<template>
    <section class="text-gray-700 body-font overflow-hidden bg-white">
    <div class="container px-5 py-24 mx-auto">
        <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <img :alt="product.name" class="lg:w-1/2 w-full object-cover object-center rounded" :src="product.image">
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 class="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
                <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{{ product.name }}</h1>
                <div class="py-4">
                    <div class="w-3/4 text-sm flex py-2 text-black">
                        <p>
                            Price
                            <div class="text-right ml-auto">
                                Rp. {{ product.price }}
                            </div>
                        </p>
                    </div>
                    <div class="w-3/4 text-sm flex py-2 text-black">
                        <p>
                            Category
                            <div class="text-right ml-auto">
                                {{ product.category }}
                            </div>
                        </p>
                    </div>
                </div>
                <p class="leading-relaxed">{{ product.description }}</p>
            </div>
        </div>
    </div>
    </section>
</template>

<script>
export default {
    computed: {
        product(){
            return this.$store.state.product.list.find(value => value.id == this.$route.params.product);
        }
    },
    mounted(){
        // if(!this.$store.state.product.list){
            this.getProducts();
        // }
    },
    methods: {
        getProducts(){
            this.$axios.$get("https://my-json-server.typicode.com/ezmemoar/shop-db/products")
            .then(data => {
                this.$store.commit("product/setArrayProduct", data);
            });
        }
    }
}
</script>