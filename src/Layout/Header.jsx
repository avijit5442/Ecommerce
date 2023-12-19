import React from 'react';
import { Link } from 'react-router-dom';
import { UseCountState } from '../StateManagement/Context';

const Header = () => {
  const {cartItems} = UseCountState()
  return (
    <header className="bg-red-500 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-semibold">Pret Commerce</h1>
        </div>
        <div className="flex items-center">
          <Link to="/cart">
            <span role="img" aria-label="Cart Icon" style={{ fontSize: '1.5rem' }}>
            🛒
          </span>
            <span className="bg-white text-red-500 rounded-full px-2 mr-1">
              { cartItems.length > 0 ? cartItems.length : 0}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
