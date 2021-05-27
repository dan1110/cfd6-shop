import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

export const Header = () => {
	let {login, data} = useSelector((state) => state.auth);
	return (
		<div>
			<div className="navbar navbar-topbar navbar-expand-xl navbar-light bg-light">
				<div className="container">
					{/* Promo */}
					<div className="mr-xl-8">
						<i className="fe fe-truck mr-2" /> <span className="heading-xxxs">Free shipping worldwide</span>
					</div>
					{/* Toggler */}
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#topbarCollapse"
						aria-controls="topbarCollapse"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>
					{/* Collapse */}
					<div className="collapse navbar-collapse" id="topbarCollapse">
						{/* Nav */}
						<ul className="nav nav-divided navbar-nav mr-auto">
							<li className="nav-item dropdown">
								{/* Toggle */}
								<a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#">
									<img className="mb-1 mr-1" src="/img/flags/usa.svg" alt="..." /> United States
								</a>
								{/* Menu */}
								<div className="dropdown-menu minw-0">
									<a className="dropdown-item" href="#!">
										<img className="mb-1 mr-2" src="/img/flags/usa.svg" alt="USA" />
										United States
									</a>
									<a className="dropdown-item" href="#!">
										<img className="mb-1 mr-2" src="/img/flags/canada.svg" alt="Canada" />
										Canada
									</a>
									<a className="dropdown-item" href="#!">
										<img className="mb-1 mr-2" src="/img/flags/germany.svg" alt="Germany" />
										Germany
									</a>
								</div>
							</li>
							<li className="nav-item dropdown">
								{/* Toggle */}
								<a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#">
									USD
								</a>
								{/* Menu */}
								<div className="dropdown-menu minw-0">
									<a className="dropdown-item" href="#!">
										USD
									</a>
									<a className="dropdown-item" href="#!">
										EUR
									</a>
								</div>
							</li>
							<li className="nav-item dropdown">
								{/* Toggle */}
								<a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#">
									English
								</a>
								{/* Menu */}
								<div className="dropdown-menu minw-0">
									<a className="dropdown-item" href="#">
										English
									</a>
									<a className="dropdown-item" href="#">
										French
									</a>
									<a className="dropdown-item" href="#">
										German
									</a>
								</div>
							</li>
						</ul>
						{/* Nav */}
						<ul className="nav navbar-nav mr-8">
							<li className="nav-item">
								<a className="nav-link" href="./shipping-and-returns.html">
									Shipping
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="./faq.html">
									FAQ
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="./contact-us.html">
									Contact
								</a>
							</li>
						</ul>
						{/* Nav */}
						<ul className="nav navbar-nav flex-row">
							<li className="nav-item">
								<a className="nav-link text-gray-350" href="#!">
									<i className="fab fa-facebook-f" />
								</a>
							</li>
							<li className="nav-item ml-xl-n4">
								<a className="nav-link text-gray-350" href="#!">
									<i className="fab fa-twitter" />
								</a>
							</li>
							<li className="nav-item ml-xl-n4">
								<a className="nav-link text-gray-350" href="#!">
									<i className="fab fa-instagram" />
								</a>
							</li>
							<li className="nav-item ml-xl-n4">
								<a className="nav-link text-gray-350" href="#!">
									<i className="fab fa-medium" />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			{/* NAVBAR */}
			<nav className="navbar navbar-expand-lg navbar-light bg-white">
				<div className="container">
					{/* Brand */}
					<NavLink className="navbar-brand" to="/">
						Shopper.
					</NavLink>
					{/* Toggler */}
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarCollapse"
						aria-controls="navbarCollapse"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>
					{/* Collapse */}
					<div className="collapse navbar-collapse" id="navbarCollapse">
						{/* Nav */}
						<ul className="navbar-nav mx-auto">
							<li className="nav-item dropdown">
								{/* Toggle */}
								<NavLink className="nav-link" data-toggle="dropdown" to="/">
									Home
								</NavLink>
							</li>
							<li className="nav-item dropdown">
								{/* Toggle */}
								<NavLink className="nav-link" data-toggle="dropdown" to="/shops">
									Shop
								</NavLink>
							</li>
							<li className="nav-item dropdown">
								{/* Toggle */}
								<a className="nav-link" data-toggle="dropdown" href="#">
									Pages
								</a>
							</li>
							<li className="nav-item dropdown">
								{/* Toggle */}
								<NavLink className="nav-link" data-toggle="dropdown" to="/blog">
									Blog
								</NavLink>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="docs/getting-started.html">
									Docs
								</a>
							</li>
						</ul>
						{/* Nav */}
						<ul className="navbar-nav flex-row">
							<li className="nav-item">
								<a className="nav-link" data-toggle="modal" href="#modalSearch">
									<i className="fe fe-search" />
								</a>
							</li>
							<li className="nav-item ml-lg-n4">
								{login ? (
									<a className="nav-link" href="./account-orders.html">
										<i className="fe fe-user" />
									</a>
								) : (
									data?.username
								)}
							</li>
							<li className="nav-item ml-lg-n4">
								<a className="nav-link" href="./account-wishlist.html">
									<i className="fe fe-heart" />
								</a>
							</li>
							<li className="nav-item ml-lg-n4">
								<a className="nav-link" data-toggle="modal" href="#modalShoppingCart">
									<span data-cart-items={2}>
										<i className="fe fe-shopping-cart" />
									</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};
