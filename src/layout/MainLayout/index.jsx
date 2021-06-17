import { ModalNewH, ModalShoppingCart } from '../../components/Modal';
import { Footer } from './Footer';
import { Header } from './Header';
const MainLayout = ({ children }) => {
	return (
		<>
			<ModalNewH />
			<ModalShoppingCart />
			<Header />
			{children}
			<Footer />
		</>
	);
};
export default MainLayout;
