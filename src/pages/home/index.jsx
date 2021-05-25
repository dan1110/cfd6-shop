import React from 'react';
import { BestPick, Brands, Categories, CountDown, Features, Reviews } from './component';
import TopSellers from './component/TopSellers';

export function HomePage() {
	return (
		<>
			<Categories />
			<Features />
			<BestPick />
			<TopSellers />
			<CountDown />
			<Reviews />
			<Brands />
		</>
	);
}
