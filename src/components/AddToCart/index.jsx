'use client';
import { useActions } from '@/hooks/useActions';
import { Button } from '@radix-ui/themes';

const AddToCart = ({ item }) => {
	const { addProductToCart } = useActions();

	return (
		<Button onClick={() => addProductToCart(item)} size='3'>
			Add to cart
		</Button>
	);
};

export default AddToCart;
