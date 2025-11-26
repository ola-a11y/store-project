import Plane from '../assets/plane.png'; 
import { ProductsData } from '../data/proudects';
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
function Product() {
const [selectedCategory, setSelectedCategory] = useState('All');

const { addToCart } = useCart();

const filteredProducts = selectedCategory === 'All'
  ? ProductsData
  : ProductsData.filter(product => product.type === selectedCategory.toLowerCase());

return (
  <div id='products'>
    <div className="flex items-end justify-center gap-16 my-20">
      <img src={Plane} alt="" className='w-[120px]' />
      <h2 className='text-3xl font-bold'>Our Feature Products</h2>
    </div>

    <div className="flex flex-col sm:flex-row justify-evenly">
      <nav className='sm:mt-24'>
        <ul className='text-xl font-medium  flex flex-wrap gap-x-10 gap-y-3 sm:block sm:leading-[3]'>
          {['All', 'Skin Care', 'Conditioner', 'Foundation'].map((category) => (
            <li
              key={category}
              className={`hover:text-[#8D6E63] duration-500 cursor-pointer ${selectedCategory === category ? 'text-[#8D6E63] font-bold' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </nav>

      <div className="h-[400px]  max-w-[1100px] overflow-scroll">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product, index) => (
            <div key={index}>
              <div className="flex m-8 bg-white w-56 rounded-xl p-4 pr-0 relative overflow-hidden ">
                <div>
                  <h3 className="text-2xl font-medium text-gray-800 mb-4">{product.name}</h3>
                  <span className="text-4xl font-bold text-gray-800">
                    {product.price}$
                  </span>
                  <br />
                  <button className="text-[10px] mt-4 border border-gray-800 flex items-center justify-center p-1 px-2 rounded-xl" 
                  onClick={() => addToCart(product)}>
                    Shop Now
                  </button>
                </div>

                
                <div className="absolute right-0 -rotate-[20deg] top-12">
                  <img src={product.img} alt={product.name} className="w-24" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
    )
  }
  
export default Product;






