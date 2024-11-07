import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header/Header';
import BgLayout from '@/assets/background.svg';
import s from './MainLayout.module.css';

const MainLayout = ({ categories, children }) => {
	return (
		<>
			<div className={s.bg_box}>
				<BgLayout className={s.bg_icon} />
			</div>
			<Header categories={categories} />
			<main className={s.main}>{children}</main>
			{/* <Footer /> */}
		</>
	);
};

export default MainLayout;
