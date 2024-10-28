// src/FoodList.js
import React from 'react';

const Menu = () => {
  const products = [
    {
      id: 1,
      name: 'Burger',
      description: 'Juicy beef burger with cheese and fresh vegetables.',
      price: 5.99,
      image: 'Assets/image/Hamburger.jpg',
    },
    {
      id: 2,
      name: 'Pizza',
      description: 'Delicious cheese pizza with your choice of toppings.',
      price: 8.99,
      image: 'Assets/image/pizza.jpg',
    },
    {
      id: 3,
      name: 'Salad',
      description: 'Fresh mixed salad with a variety of vegetables.',
      price: 4.99,
      image: 'Assets/image/salad1.jpg',
    },
    {
      id: 4,
      name: 'Pasta',
      description: 'Creamy pasta with your choice of sauce.',
      price: 7.99,
      image: 'Assets/image/pasta.jpg',
    },
    {
        id: 4,
        name: 'Fresh-drink',
        description: 'Creamy pasta with your choice of sauce.',
        price: 7.99,
        image: 'Assets/image/colddrink.jpg',
      },
      {
        id: 4,
        name: 'Sandwich',
        description: 'Creamy pasta with your choice of sauce.',
        price: 7.99,
        image: 'Assets/image/sandwhich.jpg',
      },
      {
        id: 4,
        name: 'Special Coffee',
        description: 'Creamy pasta with your choice of sauce.',
        price: 7.99,
        image: 'Assets/image/coffee1.jpg',
      },
      {
        id: 4,
        name: 'Italian ',
        description: 'Creamy pasta with your choice of sauce.',
        price: 7.99,
        image: 'Assets/image/italian.jpg',
      },
      {
        id: 4,
        name: 'French-fries',
        description: 'Creamy pasta with your choice of sauce.',
        price: 7.99,
        image: 'Assets/image/French-fries.jpg',
      },
      {
        id: 4,
        name: 'Dessert',
        description: 'Creamy pasta with your choice of sauce.',
        price: 7.99,
        image: 'Assets/image/desserts1.jpg',
      },
      {
        id: 4,
        name: 'Hotdog',
        description: 'Creamy pasta with your choice of sauce.',
        price: 7.99,
        image: 'Assets/image/hotdog.jpg',
      },
      {
        id: 4,
        name: 'Chocolate Browney',
        description: 'Creamy pasta with your choice of sauce.',
        price: 7.99,
        image: 'Assets/image/Browney.png',
      },
  ];
  const handleAddToOrder = (product) => {
    console.log('Added to order:', product);
  };

  return (
    <div className="product-list">
      {products.map(product => (
        <div className="product-block" key={product.id}>
          <img src={product.image} alt={product.name} className="product-image" />
          <h2 className="product-title">{product.name}</h2>
          <p className="product-id">ID: {product.id}</p>
          <p className="product-description">{product.description}</p>
          <p className="product-price">${product.price.toFixed(2)}</p>
          <button onClick={() => handleAddToOrder(product)} className="add-to-order-button">
            Add to Order
          </button>
        </div>
      ))}
    </div>
  );
};

export default Menu;
