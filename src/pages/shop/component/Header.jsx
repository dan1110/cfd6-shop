import { Link } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";

export function Header() {
  let { categoryName } = useSelector((state) => state.product);

  return (
    <div className="row align-items-center mb-7">
      <div className="col-12 col-md">
        {/* Heading */}
        {categoryName ? (
          <h3 className="mb-1">{categoryName?.title}</h3>
        ) : (
          <h3 className="mb-1">Sản phẩm</h3>
        )}
        {/* Breadcrumb */}
        <ol className="breadcrumb mb-md-0 font-size-xs text-gray-400">
          <li className="breadcrumb-item">
            <Link className="text-gray-400" to="/">
              Trang chủ
            </Link>
          </li>
          {categoryName ? (
            <li className="breadcrumb-item active">{categoryName?.title}</li>
          ) : (
            <li className="breadcrumb-item active">Tất cả sản phẩm</li>
          )}
        </ol>
      </div>
      <div className="col-12 col-md-auto">
        {/* Select */}
        <select className="custom-select custom-select-xs">
          <option selected>Most popular</option>
        </select>
      </div>
    </div>
  );
}
