import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ProductItem } from './ProductItem';

export function Product() {
	let { product, loading } = useSelector((state) => state.product);

	return (
		<div className="row">
			{loading
				? [...Array(15)].map((item) => <ProductItem {...item} />)
				: product?.map((item) => <ProductItem {...item} key={item._id} />)}
		</div>
	);
}
