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
      <div className='productGallery'>
        {productData &&
          productData.map((product) => (
            <div className='product-item' key={product.id}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>$ {product.price}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Products;
