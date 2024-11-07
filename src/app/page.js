import ProductsPage from '@/components/ProductsPage';
import { fetchCategoriesList } from '@/store/category/category.operations';
import { fetchProducts } from '@/store/product/product.operations';

export default async function Home({ params }) {
	const data = await fetchProducts({ page: params?.page || 1 });
	const categories = await fetchCategoriesList();

	return <ProductsPage data={data} categories={categories} />;
}
