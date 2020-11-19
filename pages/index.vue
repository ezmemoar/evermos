<template>
  <div class="w-3/4 mx-auto">
    <div class="grid grid-cols-3 gap-6">
      <template v-for="product in products">
        <product-card :key="product.id" :value="product"/>
      </template>
    </div>
  </div>
</template>

<script>
import ProductCard from '~/components/Product-Card.vue'
export default {
  data(){
    return {
      products: []
    }
  },
  mounted(){
    this.getProducts();
  },
  methods: {
    getProducts(){
      this.$axios.$get("https://my-json-server.typicode.com/ezmemoar/shop-db/products")
      .then(data => {
        this.products = data;
        console.log(data);
      })
    }
  }
}
</script>