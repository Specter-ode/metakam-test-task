import s from './ProductCard.module.css';
import Image from 'next/image';
import { Flex, Text } from '@radix-ui/themes';
import AddCart from '../AddToCart';
import Star from '../shared/Star';

const ProductCard = ({ item }) => {
	const originalPrice = item?.price || 0;
	const discountAmount = (originalPrice * item.discountPercentage) / 100;
	const discountedPrice = (originalPrice - discountAmount).toFixed(2);
	return (
		<div className={s.card}>
			<div className={s.container}>
				<Image className={s.image} src={item.thumbnail} alt={item.title} width={400} height={400} />
			</div>
			<div className={s.details}>
				<div className={s.rating}>
					<Text className={s.rating_text}>{item.rating}</Text>
					<Star item={item} />
				</div>
				<h4 className={s.title}>{item.title}</h4>
				<Flex justify='between' align='center'>
					<Flex direction='column'>
						<Text as='p' className={s.originalPrice}>
							{originalPrice}$
						</Text>
						<Text as='p' className={s.discountedPrice}>
							{discountedPrice}$
						</Text>
					</Flex>
					<AddCart selectClass={s.select_box} item={{ ...item, discountAmount, discountedPrice }} />
				</Flex>
			</div>

			<div className={s.addition}>
				<Text as='p' className={s.description}>
					{item.description}
				</Text>
			</div>
		</div>
	);
};

export default ProductCard;
