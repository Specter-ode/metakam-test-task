import s from './Star.module.css';

const Star = ({ item }) => {
	const percentage = `${(item.rating / 5) * 100}%`;

	return (
		<>
			<svg className={s.icon} viewBox='0 0 32 32' width='32' height='32'>
				<defs>
					<mask id={`rating-${item.id}`}>
						{/* Этот прямоугольник будет перекрывать левую часть звезды */}
						<rect x='0' y='0' width={percentage} height='32' fill='white' />
						{/* Этот прямоугольник будет перекрывать правую часть звезды */}
						<rect x={percentage} y='0' width='100%' height='32' fill='grey' />
					</mask>

					<symbol id='star' viewBox='0 0 32 32'>
						<path d='M31.547 12a.848.848 0 00-.677-.577l-9.427-1.376-4.224-8.532a.847.847 0 00-1.516 0l-4.218 8.534-9.427 1.355a.847.847 0 00-.467 1.467l6.823 6.664-1.612 9.375a.847.847 0 001.23.893l8.428-4.434 8.432 4.432a.847.847 0 001.229-.894l-1.615-9.373 6.822-6.665a.845.845 0 00.214-.869z' />
					</symbol>
				</defs>
				{/* Звезда с маской, которая показывает заполненную часть */}
				<use href='#star' mask={`url(#rating-${item.id})`} fill='var(--accent-9)' />
				{/* Звезда без маски для границы */}
				<use href='#star' fill='none' stroke='grey' />
			</svg>
		</>
	);
};

export default Star;
