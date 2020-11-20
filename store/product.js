export const state = () => ({
    list: [],
});

export const mutations = {
    setArrayProduct(state, products) {
        state.list = products;
    },
    pushProduct(state, product) {
        state.list.push(product);
    },
}