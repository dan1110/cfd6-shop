import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductAction } from '../../redux/actions/productAction';
import { SET_LOADING } from '../../redux/type';
import { convertStrToQuery, convertQueryToStr } from '../../utils';
import { Products, Sidebar } from './component';

export function ShopPage() {
	let dispatch = useDispatch();

	let url = convertQueryToStr();
	let pageParam = convertStrToQuery(url);

	useEffect(() => {
		dispatch({
			type: SET_LOADING,
		});
		dispatch(getProductAction(pageParam));
	}, [pageParam]);

	return (
		<section className="py-11">
			<div className="container">
				<div className="row">
					<Sidebar />
					<Products />
				</div>
			</div>
		</section>
	);
}
