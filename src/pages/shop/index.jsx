import React from 'react';
import { Products, Sidebar } from './component';

export function ShopPage() {
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
