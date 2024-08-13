import React from 'react';
import './Checkout.css';
import Product from '../../assets/product.jpg';
import { Link, useNavigate } from 'react-router-dom';

const Checkout = () => {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    // Add your logic to add the product to the cart here

    // Navigate to the cart page
    navigate('/cart');
  };

  return (
    <>
      <div id="productDetailsPage">
        <div className="container">
          <div className="row">
            <div className="product-details-wrapper d-flex justify-content-between align-items-start flex-row">
              <div className="product-img d-flex">
                <img src={Product} alt="Product" />
              </div>

              <div className="product-details-box d-flex flex-column">
                <div id="productDetails">
                  <div className="product-name">Some product</div>
                  <div className="product-price fw-bold">&#8377; 10000</div>
                  <div className="product-description">
                    <div className="product-description-title fw-bold">Description</div>
                    <div className="product-description-data">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
                      industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type 
                      and scrambled it to make a type specimen book. It has survived not only five centuries, but also 
                      the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 
                      1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with 
                      desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </div>
                  </div>
                </div>

                <div className="d-flex flex-column">
                  <div 
                    className="product-details-action btn btn-primary text-decoration-non"
                   
                  >
                    Add to cart
                  </div>
                  <Link to="/cart" id="goToCartBtn"  onClick={handleAddToCart} className="product-details-action btn btn-warning text-decoration-none">
                    Go to cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
