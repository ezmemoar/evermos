<template>
  <div class="w-full mx-auto">
    <navbar/>
    <div class="w-3/4 mx-auto mt-10">
      <div class="grid grid-cols-4 gap-1">
        <template v-for="product in products">
          <product-card :key="product.id" :value="product"/>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from '~/components/Product-Card.vue'
import navbar from '~/components/Navbar.vue'
export default {
  computed: {
    products(){
      return this.$store.state.product.list
    },
  },
  mounted(){
    this.getProducts();
  },
  methods: {
    getProducts(){
      this.$axios.$get("https://my-json-server.typicode.com/ezmemoar/shop-db/products")
      .then(data => this.$store.commit("product/setArrayProduct", data));
    },
  }
}
</script>