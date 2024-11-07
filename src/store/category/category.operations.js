import { instance } from '../instance';
import { cache } from 'react';

export const fetchCategoriesList = cache(async () => {
	try {
		const { data } = await instance.get(`/products/categories`);

		return data || [];
	} catch (error) {
		console.log('fetchCategoriesList error: ', error);
	}
});
