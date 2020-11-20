export const state = () => ({
    list: []
});

export const mutations = {
    setArrayCategories(state, categories) {
        state.list = categories;
    },
    pushCategory(state, category) {
        state.list.push(category);
    }
}