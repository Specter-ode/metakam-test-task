const getProductState = state => state.product;
const getProducts = state => state.product.products;
const getCurrentPage = state => state.product.currentPage;

const productSelectors = {
	getProductState,
	getProducts,
	getCurrentPage,
};

export default productSelectors;
