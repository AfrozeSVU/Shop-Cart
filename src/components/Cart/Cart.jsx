import React from 'react'
import './Cart.css'
import Product from '../../assets/product.jpg'
import { Link } from 'react-router-dom';


const Cart = () => {
  return (
    <>
      <div class="container">
        <div class="row">
          <h2 class="cart-title text-center">Your cart</h2>
          <div class="cart-wrapper d-flex flex-row">
            <div class="order-details d-flex flex-column" id="orderDetails">

              <div class="order-details-title fw-bold">Order Details</div>
              <div class="order-details-product d-flex flex-row">

                <div class="order-details-product-img d-flex">
                  <img src={Product} alt="" />
                </div>
                <div class="order-details-product-data d-flex flex-column">
                  <div>Some product</div>
                  <div>&#8377; 10000</div>
                </div>
                <div class="order-details-product-actions d-flex flex-column">
                  <div class="order-details-product-quantity">
                    <div class="fw-bold">Quantity</div>
                    <div class="form-group">
                      <select name="" id="" class="form-select">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </div>
                  </div>
                  <div class="order-details-product-remove btn btn-danger">Remove</div>
                </div>
              </div>

              <hr />

              <div class="order-details-product d-flex flex-row">

                <div class="order-details-product-img d-flex">
                  <img src={Product} alt="" />
                </div>
                <div class="order-details-product-data d-flex flex-column">
                  <div>Some product</div>
                  <div>&#8377; 10000</div>
                </div>
                <div class="order-details-product-actions d-flex flex-column">
                  <div class="order-details-product-quantity">
                    <div class="fw-bold">Quantity</div>
                    <div class="form-group">
                      <select name="" id="" class="form-select">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </div>
                  </div>
                  <div class="order-details-product-remove btn btn-danger">Remove</div>
                </div>
              </div>

              <hr />

              <div class="order-details-product d-flex flex-row">

                <div class="order-details-product-img d-flex">
                  <img src={Product} alt="" />
                </div>
                <div class="order-details-product-data d-flex flex-column">
                  <div>Some product</div>
                  <div>&#8377; 10000</div>
                </div>
                <div class="order-details-product-actions d-flex flex-column">
                  <div class="order-details-product-quantity">
                    <div class="fw-bold">Quantity</div>
                    <div class="form-group">
                      <select name="" id="" class="form-select">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </div>
                  </div>
                  <div class="order-details-product-remove btn btn-danger">Remove</div>
                </div>
              </div>

              <hr />

              <div class="order-details-product d-flex flex-row">

                <div class="order-details-product-img d-flex">
                  <img src={Product} alt="" />
                </div>
                <div class="order-details-product-data d-flex flex-column">
                  <div>Some product</div>
                  <div>&#8377; 10000</div>
                </div>
                <div class="order-details-product-actions d-flex flex-column">
                  <div class="order-details-product-quantity">
                    <div class="fw-bold">Quantity</div>
                    <div class="form-group">
                      <select name="" id="" class="form-select">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </div>
                  </div>
                  <div class="order-details-product-remove btn btn-danger">Remove</div>
                </div>
              </div>
            </div>

            <div class="price-details d-flex flex-column" id="priceDetails">
              <div class="price-details-box">

                <div class="price-details-title fw-bold">Price Details</div>
                <div class="price-details-data">
                  <div class="price-details-item d-flex flex-row justify-content-between">
                    <div>Price</div>
                    <div>&#8377; 10000</div>
                  </div>
                  <div class="price-details-item d-flex flex-row justify-content-between">
                    <div>Discount</div>
                    <div>&#8377; 10</div>
                  </div>
                  <div class="price-details-item d-flex flex-row justify-content-between">
                    <div>Delivery Charges</div>
                    <div>FREE</div>
                  </div>
                  <div class="price-details-item d-flex flex-row justify-content-between">
                    <div>Total</div>
                    <div>&#8377; 9990</div>
                  </div>
                </div>

              </div>
                    <div className="price-details-btn-group">
        <Link to="/products" className="continue-shopping-btn btn btn-info text-decoration-none me-2">
          Continue Shopping
        </Link>
        <Link to="/checkout" className="checkout-btn btn btn-primary text-decoration-none">
          Checkout
        </Link>
      </div>



            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart;
