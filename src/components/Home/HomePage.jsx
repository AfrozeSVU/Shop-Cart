import React from 'react';
 
import './HomePage.css';
import ShoppingList from '../ShoppingList/ShoppingList';


function HomePage() {
  return (
    <>
      <div className="container">
          <div className="row">
              <h2 className="home-title text-center">Welcome to Shop Cart</h2>
              <div className="category-list d-flex flex-row justify-content-between align-items-center" id="categoryList">
                  
                  <div className="category-item d-flex align-items-center justify-content-center">
                      <a href="#">All products</a>
                  </div>

                  <div className="category-item d-flex align-items-center justify-content-center">
                      <a href="#">Electronics</a>
                  </div>

                  <div className="category-item d-flex align-items-center justify-content-center">
                      <a href="#">Kitchen Ware</a>
                  </div>

                  <div className="category-item d-flex align-items-center justify-content-center">
                      <a href="#">Women Outfit</a>
                  </div>

                  <div className="category-item d-flex align-items-center justify-content-center">
                      <a href="#">Sports</a>
                  </div>

                  <div className="category-item d-flex align-items-center justify-content-center">
                      <a href="#">Gaming</a>
                  </div>
              </div>
              <div className="category-title text-center">
                  Select a category to start Shopping
              </div>
          </div>
          <ShoppingList />
      </div>
      </>
  );
}

export default HomePage;
