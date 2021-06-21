import {
	ADD_TO_CART,
	DECREASE_PRODUCT_CART,
	INCREASE_PRODUCT_CART,
	REMOVE_PRODUCT_CART,
	ADD_AMOUNT_PRODUCT,
} from './../type';
const initialState = {
	listCart: JSON.parse(localStorage.getItem('listCart')) || [],
	priceTotal: JSON.parse(localStorage.getItem('priceTotal')) || 0,
	amountCart: JSON.parse(localStorage.getItem('amountCart')) || 0,
	productItem: {},
};

export default function CartReducer(state = initialState, action) {
	switch (action.type) {
		case ADD_TO_CART: {
			let { listCart, priceTotal, amountCart, productItem } = state;
			let cartItem = action.payload;
			let amountProduct = cartItem.amountProduct || 1;
			let index = listCart.findIndex((item) => item._id === action.payload._id);

			amountCart += 1;

			if (index === -1) {
				//index === -1 => không có bị trùng thì nó add vào
				cartItem.amountProduct = amountProduct;
				listCart.push(cartItem);

				priceTotal += cartItem.price;
				// priceTotal + cartItem.price = cartItem.price
			} else {
				//index !== -1 => Bị trùng thì nó cộng dồn vào
				listCart[index].amountProduct += amountProduct;
				priceTotal += listCart[index].price;
			}
			localStorage.setItem('listCart', JSON.stringify(listCart));
			localStorage.setItem('priceTotal', JSON.stringify(priceTotal));
			localStorage.setItem('amountCart', JSON.stringify(amountCart));

			return {
				...state,
				listCart,
				priceTotal,
				amountCart,
			};
		}
		case DECREASE_PRODUCT_CART: {
			let { listCart, priceTotal, amountCart } = state;
			let index = listCart.findIndex((item) => item._id === action.payload._id);

			// if (listCart[index].amountProduct > 1) {
			// 	listCart[index].amountProduct -= 1;
			// 	priceTotal -= listCart[index].price;
			// 	amountCart -= 1;
			// } else if (listCart[index].amountProduct === 0) {
			// 	listCart.splice(index, 1);
			// }

			//decrease product === 0 =>removess
			amountCart -= 1;
			priceTotal -= action.payload.price;
			listCart[index].amountProduct -= 1;
			if (listCart[index].amountProduct === 0) {
				listCart.splice(index, 1);
			}

			localStorage.setItem('listCart', JSON.stringify(listCart));
			localStorage.setItem('priceTotal', JSON.stringify(priceTotal));
			localStorage.setItem('amountCart', JSON.stringify(amountCart));

			return {
				...state,
				listCart,
				priceTotal,
				amountCart,
			};
		}
		case INCREASE_PRODUCT_CART: {
			// listCart[index] là vị trí của sản phẩm thứ index
			let { listCart, priceTotal, amountCart } = state;
			let index = listCart.findIndex((item) => item._id === action.payload._id);
			listCart[index].amountProduct += 1;
			priceTotal += listCart[index].price;
			amountCart += 1;

			localStorage.setItem('listCart', JSON.stringify(listCart));
			localStorage.setItem('priceTotal', JSON.stringify(priceTotal));
			localStorage.setItem('amountCart', JSON.stringify(amountCart));

			return {
				...state,
				listCart,
				priceTotal,
				amountCart,
			};
		}
		case REMOVE_PRODUCT_CART: {
			let { listCart, priceTotal, amountCart } = state;
			let index = listCart.findIndex((item) => item._id === action.payload._id);
			let newListCart = listCart.filter((item) => item._id !== action.payload._id);

			let newAmount = listCart[index].amountProduct;
			let newPrice = priceTotal - listCart[index].price * newAmount;

			localStorage.setItem('listCart', JSON.stringify(newListCart));
			localStorage.setItem('priceTotal', JSON.stringify(newPrice));
			localStorage.setItem('amountCart', JSON.stringify(amountCart - newAmount));

			return {
				...state,
				listCart: newListCart,
				priceTotal: newPrice,
				amountCart: amountCart - newAmount,
			};
		}
		case ADD_AMOUNT_PRODUCT: {
			let { listCart, priceTotal, amountCart } = state;
			let index = listCart.findIndex((item) => item._id === action.payload._id);
			let newAmountProduct = action.payload.num;
			amountCart -= listCart[index].amountProduct;
			priceTotal -= listCart[index].price * listCart[index].amountProduct;

			amountCart += newAmountProduct;
			priceTotal += listCart[index].price * newAmountProduct;

			listCart[index].amountProduct = newAmountProduct;

			localStorage.setItem('listCart', JSON.stringify(listCart));
			localStorage.setItem('priceTotal', JSON.stringify(priceTotal));
			localStorage.setItem('amountCart', JSON.stringify(amountCart));
			return {
				...state,
				listCart,
				priceTotal,
				amountCart,
			};
		}
		default:
			return state;
	}
}
