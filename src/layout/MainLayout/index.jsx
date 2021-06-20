import { ModalNewH, ModalProduct, ModalShoppingCart } from '../../components/Modal';
import { Footer } from './Footer';
import { Header } from './Header';
const MainLayout = ({ children }) => {
	return (
		<>
			<ModalNewH />
			<ModalShoppingCart />
			<ModalProduct />
			<Header />
			{children}
			<Footer />
		</>
	);
};
export default MainLayout;
