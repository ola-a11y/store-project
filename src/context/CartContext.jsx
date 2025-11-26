import React, { createContext, useState, useEffect, useContext } from 'react';

const getInitialCart = () => {
  const savedCart = localStorage.getItem('cart');
  return savedCart ? JSON.parse(savedCart) : [];
};

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getInitialCart());

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  
  const addToCart = (productToAdd) => {
    setCartItems(prevItems => {
  
      const existingItem = prevItems.find(item => item.id === productToAdd.id);

      if (existingItem) {
        return prevItems.map(item =>
          item.id === productToAdd.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...productToAdd, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => {
      return prevItems.filter(item => item.id !== productId);
    });
  };

  const decreaseQuantity = (productId) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === productId);

      if (existingItem.quantity === 1) {
        return prevItems.filter(item => item.id !== productId);
      }
      
      return prevItems.map(item =>
        item.id === productId
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    });
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    decreaseQuantity,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  return useContext(CartContext);
};