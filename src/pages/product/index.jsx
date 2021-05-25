import React from 'react';
import { Decription, Features, Products, Review, Product } from './component';

export function ProductPage() {
	return (
		<>
			<Product /> 
			<Decription />
			<Products />
			<Review />
			<Features />
		</>
	);
}
