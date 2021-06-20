import { ADD_TO_CART, DECREASE_PRODUCT_CART, INCREASE_PRODUCT_CART, REMOVE_PRODUCT_CART } from './../type';
const initialState = {
	listCart: [],
	priceTotal: 0,
	amountCart: 0,
};

export default function CartReducer(state = initialState, action) {
	switch (action.type) {
		case ADD_TO_CART: {
			let { listCart, priceTotal, amountCart } = state;
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

			if (listCart[index].amountProduct > 1) {
				listCart[index].amountProduct -= 1;
				priceTotal -= listCart[index].price;
				amountCart -= 1;
			}

			return {
				...state,
				listCart,
				priceTotal,
				amountCart,
			};
		}
		case INCREASE_PRODUCT_CART: {
			let { listCart, priceTotal, amountCart } = state;
			let index = listCart.findIndex((item) => item._id === action.payload._id);
			listCart[index].amountProduct += 1;
			priceTotal += listCart[index].price;
			amountCart += 1;

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
			let newPrice = listCart[index].price;

			return {
				...state,
				listCart: newListCart,
				priceTotal: priceTotal - newPrice,
				amountCart: amountCart - newAmount,
			};
		}
		default:
			return state;
	}
}
