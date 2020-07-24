import React, { useEffect, useState } from 'react';

import ProductCard from '../../components/ProductCard';
import { DivProducts } from './styles';

import api from '../../services/api';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get('products').then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <DivProducts>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          products={products}
          setProducts={setProducts}
        />
      ))}
    </DivProducts>
  );
};

export default Products;
