import React from 'react';
import { useCart } from '../context/CartContext'; 
import { Link } from 'react-router-dom';

const CartPage = () => {

  const { cartItems, addToCart, removeFromCart, decreaseQuantity } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="text-center p-10 max-w-md mx-auto my-10 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Your cart is empty.</h2>
        <Link to="/" className="text-yellow-600 hover:text-yellow-800 font-medium">
          &larr; Go shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-8 max-w-2xl mx-auto my-10 bg-white shadow-xl rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">Your Cart</h1>
      <div className="space-y-4">
        
        {cartItems.map((item) => ( 
          <div 
            key={item.id} 
            className="flex flex-col sm:flex-row items-center justify-between p-4 border-b border-gray-200 gap-4"
          >
    
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <img 
                src={item.img} 
                alt={item.name} 
                className="w-16 h-16 object-contain rounded" 
              />
              <div className="flex-grow">
                <h3 className="font-semibold text-gray-800">{item.name}</h3>
                <p className="text-gray-600">{item.price}$</p>
              </div>
            </div>

 
            <div className="flex items-center gap-4">
              
              <div className="flex items-center gap-2 border border-gray-300 rounded-md">
                <button 
                  onClick={() => decreaseQuantity(item.id)} 
                  className="px-3 py-1 text-lg font-bold text-gray-700 hover:bg-gray-100 rounded-l-md"
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span className="px-3 text-gray-800">{item.quantity}</span>
                <button 
                  onClick={() => addToCart(item)} 
                  className="px-3 py-1 text-lg font-bold text-gray-700 hover:bg-gray-100 rounded-r-md"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
              
              <button 
                onClick={() => removeFromCart(item.id)} 
                className="text-gray-400 hover:text-red-500"
                aria-label="Remove item"
              >
                
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12.578 0a48.108 48.108 0 013.478-.397m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default CartPage;



