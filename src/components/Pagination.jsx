import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { convertStrToQuery } from '../utils';

export function Pagination() {
	let { paginate } = useSelector((state) => state.product);
	// console.log(paginate);

	let start = paginate.currentPage - 2;
	if (start <= 0) {
		start = 1;
	}

	let end = start + 5;
	if (end > paginate.totalPage) {
		end = paginate.totalPage;
	}

	const renderPage = () => {
		let arr = [];
		for (let i = start; i <= end; i++) {
			arr.push(
				<li className={`page-item ${paginate?.currentPage === i ? 'active' : ''}`}>
					<Link className="page-link" to={`/product?page=${i}`}>
						{i}
					</Link>
				</li>
			);
		}
		return arr;
	};

	return (
		<nav className="d-flex justify-content-center justify-content-md-end">
			<ul className="pagination pagination-sm text-gray-400">
				{paginate?.currentPage === 1 ? (
					<li className="page-item"></li>
				) : (
					<li className="page-item">
						<Link className="page-link page-link-arrow" to={`/product?page=${paginate.currentPage - 1}`}>
							<i className="fa fa-caret-left" />
						</Link>
					</li>
				)}
				{renderPage()}
				{paginate?.currentPage === paginate?.totalPage ? (
					<li className="page-item"></li>
				) : (
					<li className="page-item">
						<Link
							className="page-link page-link-arrow next"
							to={`/product?page=${paginate.currentPage + 1}`}
						>
							<i className="fa fa-caret-right" />
						</Link>
					</li>
				)}
			</ul>
		</nav>
	);
}
