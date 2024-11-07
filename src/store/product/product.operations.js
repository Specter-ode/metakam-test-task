import { instance } from '../instance';
const necessaryFields = 'id,title,description,price,rating,discountPercentage,thumbnail';
import { cache } from 'react';

export const fetchProducts = cache(async ({ page = 1, limit = 12, sortBy, order, searchValue }) => {
	const params = {
		limit,
		page,
		select: necessaryFields,
		...(sortBy && order ? { sortBy, order } : {}),
		...(searchValue ? { search: { q: searchValue } } : {}),
	};
	try {
		const { data } = await instance.get('/products', { params });
		return data;
	} catch (error) {
		console.log('fetchProducts error: ', error);
	}
});

export const fetchProductsByCategory = async ({
	category,
	page = 1,
	limit = 10,
	sortBy,
	order,
	searchValue,
}) => {
	const params = {
		limit,
		page,
		select: necessaryFields,
		...(sortBy && order ? { sortBy, order } : {}),
		...(searchValue ? { search: { q: searchValue } } : {}),
	};
	try {
		const { data } = await instance.get(`/products/category/${category}`, { params });
		return data;
	} catch (error) {
		console.log('fetchProductsByCategory error: ', error);
	}
};
