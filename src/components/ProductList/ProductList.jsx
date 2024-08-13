import React from 'react';
import { Link } from 'react-router-dom';
import './ProductList.css'
import Product from '../../assets/header_image.avif'

const ProductList = () => {
  return (
    <div id="productList">
      <div className="container">
        <div className="row">
          <h2 className="product-list-title text-center">All Products</h2>
          <div className="product-list-wrapper d-flex flex-row">
            <div className="product-list-sidebar d-flex flex-column">
              <div className="sidebar-title">Search Products</div>
              <div className="sidebar-search form-group">
                <input
                  type="text"
                  placeholder="Search by name"
                  className="form-control"
                  id="searchInput"
                />
              </div>
              <div className="sidebar-title fw-bold">Categories</div>
              <div id="categoryList">
                <Link to="#" className="d-flex text-decoration-none">Electronics</Link>
                <Link to="#" className="d-flex text-decoration-none">Kitchen ware</Link>
                <Link to="#" className="d-flex text-decoration-none">Women outfit</Link>
                <Link to="#" className="d-flex text-decoration-none">Sports</Link>
                <Link to="#" className="d-flex text-decoration-none">Gaming</Link>
              </div>
              <div className="sidebar-title">Filter by price</div>
              <div className="price-filter">
                <div className="price-filter-select d-flex flex-row justify-content-between">
                  <div className="form-group">
                    <select name="minPrice" className="form-select" id="minPrice">
                      <option value="0">0</option>
                      <option value="1000">1000</option>
                      <option value="2000">2000</option>
                      <option value="5000">5000</option>
                      <option value="10000">10000</option>
                      <option value="20000">20000</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <select name="maxPrice" className="form-select" id="maxPrice">
                      <option value="0">0</option>
                      <option value="1000">1000</option>
                      <option value="2000">2000</option>
                      <option value="5000">5000</option>
                      <option value="10000">10000</option>
                      <option value="20000">20000</option>
                      <option value="100000">100000</option>
                    </select>
                  </div>
                </div>
                <div className="price-filter-title d-flex flex-row justify-content-start">
                  <div id="price-filter-label-min">Min Price</div>
                  <div id="price-filter-label-max">Max Price</div>
                </div>
              </div>
              <button className="btn btn-danger clear-filter" id="clear">Clear Filters</button>
            </div>
            <div className="product-list-box" id="productList">
              {/* List of products */}
              <Link to="/productDetails" target="_blank" className="product-item text-decoration-none d-inline-block">
                <div className="product-img">
                   <img src={Product} alt="" />
                </div>
                <div className="product-name text-center">Some product</div>
                <div className="product-price text-center">&#8377; 10000</div>
              </Link>
              {/* Add more products here */}
            </div>

       


          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
