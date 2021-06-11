import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import { Sidebar } from "./component";

export function Account({ children }) {
  let { login } = useSelector((state) => state.auth);

  if (!login) return <Redirect to="/login" />;

  return (
    <section className="pt-7 pb-12">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            {/* Heading */}
            <h3 className="mb-10">My Account</h3>
          </div>
        </div>
        <div className="row">
          <Sidebar />

          {children}
          {/* <Switch>
						<Route path="/account/address" exact component={Address} />
						<Route path="/account/address/edit" component={AddressEdit} />
						<Route path="/account/orders/detail" component={Order} />
						<Route path="/account/orders" exact component={Orders} />
						<Route path="/account/payment" component={Payment} />
						<Route path="/account/payment/payment-edit" component={PaymentEdit} />
						<Route path="/account" exact component={PersonalInfo} />
						<Route path="/account/wishlist" component={WishList} />
					</Switch> */}
        </div>
      </div>
    </section>
  );
}
