<template>
    <div class="product-card">
        <div class="bg-white rounded-lg overflow-hidden shadow-lg p-3">
            <nuxt-link :to="{name: 'product', params: {product: value.id}}" class="no-underline hover:no-underline">
                <img :src="value.image" class="h-64 w-full rounded-t pb-6">
                <!-- <p class="w-full text-gray-600 text-xs md:text-sm px-6">GETTING STARTED</p> -->
                <div class="w-full font-bold text-xl text-gray-900">{{ value.name }}</div>
                
            </nuxt-link>
            <div class="ml-auto">
                {{ value.price }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "product-card",
    props: {
        value: Object
    }
}
</script>