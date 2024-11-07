'use server';

import { Flex, Grid } from '@radix-ui/themes';
import Search from '@/components/Search';
import Pagination from '../Pagination';
import s from './ProductPage.module.css';
import ProductCard from '../ProductCard';
import Categories from '../Categories';

const ProductsPage = async ({ data, categories }) => {
	return (
		<div className={s.container}>
			<Grid columns={{ initial: '1', sm: '320px 1fr' }} position='relative' gap='32px'>
				<aside className={s.aside}>
					<Categories categories={categories} />
				</aside>

				<Flex flexGrow={1} direction='column' gap='5' py={{ initial: '4', sm: '6' }} w='100%'>
					<Search />
					<ul className={s.list}>
						{data?.products.map(item => (
							<ProductCard key={item.id} item={item} />
						))}
					</ul>
					<Pagination />
				</Flex>
			</Grid>
		</div>
	);
};

export default ProductsPage;
