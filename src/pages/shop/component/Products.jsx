import React from 'react';
import { Pagination } from '../../../components';
import { Header } from './Header';
import { Product } from './Product';
import { Slider } from './Slider';
import { Tags } from './Tags';

export function Products() {
	

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
