import ProductsPage from '@/components/ProductsPage';
import { fetchCategoriesList } from '@/store/category/category.operations';
import { fetchProductsByCategory } from '@/store/product/product.operations';

export async function generateStaticParams() {
	const categories = await fetchCategoriesList();
	return (
		categories.map(el => ({
			slug: el.slug,
		})) || []
	);
}
export default async function ProductsWithCategory({ params }) {
	const data = await fetchProductsByCategory({
		category: params.category,
		page: params?.page || 1,
	});
	const categories = await fetchCategoriesList();

	return <ProductsPage data={data} categories={categories} />;
}
