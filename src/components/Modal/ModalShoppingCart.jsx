import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { currency } from '../../utils';
import '../../assets/custom.scss';
import {
	addAmountProduct,
	decreaseProductAction,
	increaseProductAction,
	removeProductAction,
} from '../../redux/actions/cartAction';

export function ModalShoppingCart() {
	let { listCart, priceTotal, amountCart } = useSelector((state) => state.cart);

	return ReactDOM.createPortal(
		<div className="modal fixed-right fade" id="modalShoppingCart" tabIndex={-1} role="dialog" aria-hidden="true">
			<div className="modal-dialog modal-dialog-vertical" role="document">
				{listCart.length === 0 ? (
					<div className="modal-content">
						{/* Close */}
						<button type="button" className="close" data-dismiss="modal" aria-label="Close">
							<i className="fe fe-x" aria-hidden="true" />
						</button>
						{/* Header*/}
						<div className="modal-header line-height-fixed font-size-lg">
							<strong className="mx-auto">Your Cart (0)</strong>
						</div>
						{/* Body */}
						<div className="modal-body flex-grow-0 my-auto">
							{/* Heading */}
							<h6 className="mb-7 text-center">Your cart is empty 😞</h6>
							{/* Button */}
							<a className="btn btn-block btn-outline-dark" href="#!">
								Continue Shopping
							</a>
						</div>
					</div>
				) : (
					<div className="modal-content">
						{/* Close */}
						<button type="button" className="close" data-dismiss="modal" aria-label="Close">
							<i className="fe fe-x" aria-hidden="true" />
						</button>
						{/* Header*/}
						<div className="modal-header line-height-fixed font-size-lg">
							<strong className="mx-auto">Your Cart ({amountCart})</strong>
						</div>
						{/* List group */}
						<ul className="list-group list-group-lg list-group-flush">
							{listCart.map((item) => (
								<Cart {...item} key={item._id} />
							))}
						</ul>
						{/* Footer */}
						<div className="modal-footer line-height-fixed font-size-sm bg-light mt-auto">
							<strong>Subtotal</strong> <strong className="ml-auto">{currency(priceTotal)}</strong>
						</div>
						{/* Buttons */}
						<div className="modal-body">
							<a className="btn btn-block btn-dark" href="./checkout.html">
								Continue to Checkout
							</a>
							<a className="btn btn-block btn-outline-dark" href="./shopping-cart.html">
								View Cart
							</a>
						</div>
					</div>
				)}
			</div>
		</div>,
		document.getElementById('root')
	);
}

export default function Cart(item) {
	let [amountValue, setAmountValue] = useState(item.amountProduct);
	let { _id, amountProduct } = item;

	let dispatch = useDispatch();

	useEffect(() => {
		setAmountValue(amountProduct);
	}, [amountProduct]);

	const handleDecreaseProduct = (item) => {
		dispatch(decreaseProductAction(item));
	};
	const handleIncreaseProduct = (item) => {
		dispatch(increaseProductAction(item));
	};
	const handleRemoveProduct = (item) => {
		dispatch(removeProductAction(item));
	};
	const handleChangeAmount = (e) => {
		if (e.charCode === 13) {
			let num = parseInt(amountValue);
			dispatch(addAmountProduct({ num, _id }));
		}
	};

	return (
		<li className="list-group-item">
			<div className="row align-items-center">
				<div className="col-4">
					{/* Image */}
					<a href="./product.html">
						<img className="img-fluid" src={item.thumbnail_url} alt="..." />
					</a>
				</div>
				<div className="col-8">
					{/* Title */}
					<p className="font-size-sm font-weight-bold mb-6">
						<a className="text-body" href="./product.html">
							{item.name}
						</a>
						<br />
						<span className="text-muted">{currency(item.price)}</span>
					</p>
					{/*Footer */}
					<div className="d-flex align-items-center">
						<button className=" btn btn-decrease" onClick={() => handleDecreaseProduct({ ...item })}>
							-
						</button>
						<input
							type="text"
							className="input-amount custom-select custom-select-xxs w-auto"
							value={amountValue}
							onChange={(e) => setAmountValue(e.target.value)}
							onKeyPress={handleChangeAmount}
						/>
						{/* Remove */}
						<button className="btn btn-increase" onClick={() => handleIncreaseProduct({ ...item })}>
							+
						</button>
						<a
							className="font-size-xs text-gray-400 ml-auto"
							href="#!"
							onClick={(e) => {
								e.preventDefault();
								handleRemoveProduct({ ...item });
							}}
						>
							<i className="fe fe-x" /> Remove
						</a>
					</div>
				</div>
			</div>
		</li>
	);
}
