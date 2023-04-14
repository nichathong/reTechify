import React, { useState, useEffect } from 'react';
import { getAllProducts } from '../../api/productApi';
import './product.css'


const Products = () => {
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllProducts();
        setProductData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div >This is products</div>
      <div className='banner-container'>
        <img src="/images/AdobeStock_543849158.jpeg" alt='Banner-img' />

      </div>
      <div className='product-container'>
        <div className='productGallery'>
          {productData &&
            productData.map((product) => (
              <div className='product-item' key={product.id}>
                <div className='product-name'>{product.name}</div>
                <div className='product-destription'>{product.description}</div>
                <div className='product-price'>$ {product.price}</div>
              </div>
              
            ))}
      </div>
      </div>
    </div>
  );
};

export default Products;
