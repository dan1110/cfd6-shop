import React, { useEffect, useState } from 'react';
import mapApi from '../../services/mapStore';
import CartItem from './components/CartItem';

export function StoreLocator() {
	const [mapList, setMapList] = useState();

	useEffect(async () => {
		let res = await mapApi.getMap();
		setMapList(res.data);
	}, []);

	const handleClickItem = (item) => {
		console.log(item);
	};

	return (
		<>
			<section className="pt-7 pb-12">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-12 col-md-10 col-lg-8 col-xl-6">
							{/* Heading */}
							<h3 className="mb-10 text-center">Store Locator</h3>
							{/* Search */}
							<div className="input-group input-group-merge">
								<input className="form-control" type="search" placeholder="Enter Country or City" />
								<div className="input-group-append">
									<button className="btn btn-outline-border" type="submit">
										<i className="fe fe-search" />
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="py-12 bg-light store-locator">
				<div className="container">
					<div className="row">
						<div className="col-12 col-md-5 col-lg-4">
							{/* Card */}
							<div
								className="card card-xl h-md-0 minh-md-100 mb-10 mb-md-0 shadow"
								style={{ display: 'block' }}
								data-simplebar="false"
							>
								{mapList?.map((item, i) => (
									<CartItem {...item} key={i} clicked={handleClickItem.bind(null, item)} />
								))}
							</div>
						</div>
						<div className="col-12 col-md-7 col-lg-8">
							{/* Map */}
							<div className="embed-responsive embed-responsive-4by3">
								<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29473.127589898762!2d106.69379825879714!3d10.8216715066041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1svi!2s!4v1624458478024!5m2!1svi!2s"></iframe>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
