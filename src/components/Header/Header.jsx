import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

function Header() {
  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate('/cart');  // Navigate to the cart page
  };

  const handleLoginClick = () => {
    navigate('/login');  // Navigate to the login page
  };

  return (
    <>
      <nav id="header" className="sticky-header">
        <div className="container">
          <div className="row">
            <div className="header-wrapper d-flex justify-content-between">
              <div className="logo d-inline-block " >
                <a href="/" className="text-decoration-none ">Shop Cart</a>
              </div>
              <div className="user-actions d-flex flex-row">
                <div onClick={handleCartClick}  className='cart'> Cart</div> {/* Update this to use handleCartClick */}
                <div className="user-intro" id="userIntro" onClick={handleLoginClick}>Hi User</div>
                <div className="logout-btn" id="logoutBtn">Logout</div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
