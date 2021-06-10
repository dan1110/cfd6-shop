import React from 'react';
import { useSelector } from 'react-redux';
import { currency } from '../../../utils';
import { Skeleton } from '@material-ui/lab';

export function ProductItem({ name, images, price, rating_average, discount_rate, slug, thumbnail_url }) {
	let image1 = images?.[0]?.medium_url;
	let image2 = images?.[0]?.medium_url;

	let { loading} = useSelector((state) => state.product);
	return (
		<div className="col-6 col-md-4">
			{/* Card */}
			<div className="card mb-7">
				{/* Badge */}
				<div className="badge badge-white card-badge card-badge-left text-uppercase">New</div>
				{/* Image */}
				<div className="card-img">
					{/* Image */}
					{loading ? (
						<Skeleton variant="rect" width={252} height={252} />
					) : (
						<a className="card-img-hover" href="product.html">
							<img className="card-img-top card-img-back" src={thumbnail_url} alt="..." />
							<img className="card-img-top card-img-front" src={thumbnail_url} alt="..." />
						</a>
					)}
					{/* Actions */}
					<div className="card-actions">
						<span className="card-action">
							<button
								className="btn btn-xs btn-circle btn-white-primary"
								data-toggle="modal"
								data-target="#modalProduct"
							>
								<i className="fe fe-eye" />
							</button>
						</span>
						<span className="card-action">
							<button className="btn btn-xs btn-circle btn-white-primary" data-toggle="button">
								<i className="fe fe-shopping-cart" />
							</button>
						</span>
						<span className="card-action">
							<button className="btn btn-xs btn-circle btn-white-primary" data-toggle="button">
								<i className="fe fe-heart" />
							</button>
						</span>
					</div>
				</div>
				{/* Body */}
				<div className="card-body px-0">
					{/* Title */}
					<div className="font-weight-bold">
						{loading ? (
							<Skeleton variant="text" />
						) : (
							<a className="text-body" href="product.html">
								{name}
							</a>
						)}
					</div>

					{loading ? (
						<Skeleton variant="text" />
					) : (
						<div class="rating font-size-sm text-dark" data-value={rating_average}>
							<div class="rating-item">
								<i class="fas fa-star"></i>
							</div>
							<div class="rating-item">
								<i class="fas fa-star"></i>
							</div>
							<div class="rating-item">
								<i class="fas fa-star"></i>
							</div>
							<div class="rating-item">
								<i class="fas fa-star"></i>
							</div>
							<div class="rating-item">
								<i class="fas fa-star"></i>
							</div>
						</div>
					)}
					{loading ? (
						<Skeleton variant="rect" />
					) : (
						<div className="font-weight-bold text-muted">{currency(price)}</div>
					)}
				</div>
			</div>
		</div>
	);
}
