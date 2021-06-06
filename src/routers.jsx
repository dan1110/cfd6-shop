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
let routers = [
	{
		component: ComingSoon,
		path: '/coming-soon',
		exact: true,
	},
	{
		component: MainLayout,
		path: '/',
		routers: [
			{
				component: HomePage,
				path: '/',
				exact: true,
			},
			{
				component: Account,
				path: '/account',
				exact: true,
			},
			{
				component: Login,
				path: '/login',
				exact: true,
			},
			{
				component: BlogPage,
				path: '/blog',
				exact: true,
			},
			{
				component: CheckoutPage,
				path: '/checkout',
				exact: true,
			},
			{
				component: BlogPost,
				path: '/blog-post',
				exact: true,
			},

			{
				component: ContactUs,
				path: '/contact-us',
				exact: true,
			},
			{
				component: FAQ,
				path: '/faq',
				exact: true,
			},
			{
				component: OrderCompleted,
				path: '/order-completed',
				exact: true,
			},

			{
				component: ProductPage,
				path: '/product-detail',
				exact: true,
			},
			{
				component: ShippingAndReturns,
				path: '/shipping-and-returns',
				exact: true,
			},
			{
				component: ShopPage,
				path: '/product',
				exact: true,
			},
			{
				component: ShoppingCartPage,
				path: '/shopping-cart',
				exact: true,
			},
			{
				component: StoreLocator,
				path: '/store-locator',
				exact: true,
			},
			{
				component: Page404,
				path: '/page404',
				exact: true,
			},
		],
	},
];
export default routers;
