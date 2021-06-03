import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination } from '../../../components';
import { getProductAction } from '../../../redux/actions/productAction';
import { Header } from './Header';
import { Product } from './Product';
import { Slider } from './Slider';
import { Tags } from './Tags';

export function Products() {
	let { product } = useSelector((state) => state.product);
	let dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProductAction());
	}, []);
	return (
		<div className="col-12 col-md-8 col-lg-9">
			{/* Slider */}
			<Slider />
			{/* Header */}
			<Header />
			{/* Tags */}
			<Tags />
			{/* Products */}
			<Product />
			{/* Pagination */}
			<Pagination />
		</div>
	);
}
