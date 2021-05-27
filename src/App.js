import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from './redux';
import MainLayout from './layout/MainLayout';
import {
	Account,
	Login,
	BlogPage,
	BlogPost,
	CheckoutPage,
	ComingSoon,
	ContactUs,
	FAQ,
	HomePage,
	OrderCompleted,
	Page404,
	ProductPage,
	ShippingAndReturns,
	ShopPage,
	ShoppingCartPage,
	StoreLocator,
} from './pages';
import './assets/custom.scss';
import PrivateRoute from './core/PrivateRoute';

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<MainLayout>
					<Switch>
						<Route exact path="/" component={HomePage} />
						<Route path="/products" component={ProductPage} />
						<PrivateRoute path="/account" component={Account} />
						<Route path="/login" component={Login} />
						<Route path="/blog" component={BlogPage} />
						<Route path="/blog-post" component={BlogPost} />
						<Route path="/checkout" component={CheckoutPage} />
						<Route path="/coming-soon" component={ComingSoon} />
						<Route path="/contact-us" component={ContactUs} />
						<Route path="/faq" component={FAQ} />
						<Route path="/order-completed" component={OrderCompleted} />
						<Route path="/shipping-and-returns" component={ShippingAndReturns} />
						<Route path="/shops" component={ShopPage} />
						<Route path="/shopping-cart" component={ShoppingCartPage} />
						<Route path="/store-locator" component={StoreLocator} />
						<Route component={Page404} />
					</Switch>
				</MainLayout>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
