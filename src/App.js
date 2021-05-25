import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from './redux';
import MainLayout from './layout/MainLayout';
import { HomePage, ProductPage } from './pages';

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<MainLayout>
					<Switch>
						<Route exact path="/" component={HomePage} />
						<Route path="/products" component={ProductPage} />
					</Switch>
				</MainLayout>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
