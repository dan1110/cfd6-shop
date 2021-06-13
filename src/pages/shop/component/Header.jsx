import { Link } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router';
import { convertQueryToStr, convertStrToQuery } from '../../../utils';

export function Header() {
	let history = useHistory();
	let { path } = useRouteMatch();

	let obj = convertQueryToStr();

	let { categoryName } = useSelector((state) => state.product);

	function handleSort(e) {
		obj.sort = e.target.value;
		let url = convertStrToQuery(obj);

		history.push(`${path}?${url}`);
	}

	return (
		<div className="row align-items-center mb-7">
			<div className="col-12 col-md">
				{/* Heading */}
				{categoryName ? <h3 className="mb-1">{categoryName}</h3> : <h3 className="mb-1">Sản phẩm</h3>}
				{/* Breadcrumb */}
				<ol className="breadcrumb mb-md-0 font-size-xs text-gray-400">
					<li className="breadcrumb-item">
						<Link className="text-gray-400" to="/">
							Trang chủ
						</Link>
					</li>
					{categoryName ? (
						<li className="breadcrumb-item active">{categoryName}</li>
					) : (
						<li className="breadcrumb-item active">Tất cả sản phẩm</li>
					)}
				</ol>
			</div>
			<div className="col-12 col-md-auto">
				{/* Select */}
				<select className="custom-select custom-select-xs" onChange={handleSort}>
					<option value="">Sắp xếp</option>
					<option value="real_price.-1">Giá cao</option>
					<option value="real_price.1">Giá thấp</option>
					<option value="rating_average.-1">Đánh giá cao</option>
				</select>
			</div>
		</div>
	);
}
