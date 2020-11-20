<template>
    <nav class="w-full">
        <div class="w-3/4 mx-auto relative select-none lg:flex text-black lg:items-stretch">
            <div class="flex flex-no-shrink items-stretch h-12">
                    <a href="#" class="font-bold flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal no-underline flex items-center hover:bg-grey-dark border-b-2 border-black">PRODUCT LIST</a>
            </div>
            <div class="lg:flex lg:items-stretch lg:flex-no-shrink lg:flex-grow font-normal">
                <div class="lg:flex lg:items-stretch lg:justify-end ml-auto">
                    <select name="" id="" class="flex flex-no-grow bg-white border-0 flex-no-shrink relative text-sm sm:text-base relative w-full rounded placeholder-gray-400 focus:border-indigo-400 focus:outline-none py-2 pr-2 pl-12 cursor-pointer">
                        <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.category_name }}</option>
                    </select>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "navbar",
    computed: {
        categories(){
            return this.$store.state.category.list
        },
    },
    mounted(){
        this.getCategories();
    },
    methods: {
        getCategories(){
            this.$axios.$get("https://my-json-server.typicode.com/ezmemoar/shop-db/category")
            .then(data => this.$store.commit("category/setArrayCategories", data));
        }
    }
}
</script>