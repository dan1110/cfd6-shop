import React from 'react';
import { useSelector } from 'react-redux';
import { ProductItem } from './ProductItem';

export function Product() {
	
	let {product} = useSelector((state) => state.product)
	console.log(product);
	return (
		<div className="row">
			{product?.map((item) => (
				<ProductItem {...item} key={item._id} />
			))}
		</div>
	);
}
