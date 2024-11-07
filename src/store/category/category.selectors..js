const getCategoryState = state => state.category;
const getCategories = state => state.category.categories;
const getSelectedCategory = state => state.category?.selectedCategory;

const categorySelectors = {
	getCategoryState,
	getCategories,
	getSelectedCategory,
};

export default categorySelectors;
