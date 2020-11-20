<template>
    <div class="product-card">
        <div class="flex items-center justify-center">
            <div class="max-w-sm w-full sm:w-full lg:w-full py-6 px-3">
                <div class="bg-white shadow-xl rounded-lg overflow-hidden">
                    <nuxt-link :to="{name: 'product', params: {product: value.id}}" class="no-underline hover:no-underline">
                        <img :src="value.image" class="w-full h-56 p-2"/>
                    </nuxt-link>
                        <div class="p-4">
                            <nuxt-link :to="{name: 'product', params: {product: value.id}}" class="no-underline hover:no-underline">
                                <p class="text-gray-900 transition-colors duration-200 hover:text-gray-800 font-bold">{{ value.name }}</p>
                            </nuxt-link>
                        </div>
                    <div class="w-full text-sm flex p-4 border-t border-gray-300 text-gray-700">
                        <p>
                            price
                            <div class="text-right ml-auto">
                                {{ value.price }}
                            </div>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "product-card",
    props: {
        value: Object
    },
}
</script>