'use client';
import { Select } from '@radix-ui/themes';
import { useState } from 'react';

const SelectQuantity = ({ item }) => {
	const [quantity, setQuantity] = useState(1);
	const handleAddToCard = () => {};
	const options = [1, 2, 3, 4, 5];
	return (
		<Select.Root onValueChange={setQuantity} defaultValue={quantity} variant='soft' size='3'>
			<Select.Trigger />
			<Select.Content>
				{options.map(option => (
					<Select.Item key={`${option}-option`} value={option}>
						{option}
					</Select.Item>
				))}
			</Select.Content>
		</Select.Root>
	);
};

export default SelectQuantity;
