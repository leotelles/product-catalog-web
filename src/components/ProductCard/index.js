import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import shirt from '../../assets/shirt.jpg';
import deleteButton from '../../assets/deleteButton.png';
import editButton from '../../assets/editButton.png';

import api from '../../services/api';

import {
  ProductStyle,
  ImageStyle,
  DescriptionStyle,
  PriceStyle,
  DivBttonsStyle,
  DetailsStyle,
  EditStyle,
} from './styles';

const ProductCard = ({ product, products, setProducts }) => {
  const deleteProduct = (id) => {
    api.delete(`products/${id}`).then(() => {
      const newProducts = products.filter((p) => p.id !== id);
      setProducts(newProducts);
    });
  };

  const formatedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(product.price);

  return (
    <ProductStyle>
      <ImageStyle src={shirt} />
      <DescriptionStyle>{product.name}</DescriptionStyle>
      <PriceStyle>{formatedPrice}</PriceStyle>
      <DivBttonsStyle>
        <EditStyle
          onClick={() => deleteProduct(product.id)}
          image={deleteButton}
        />
        <Link to="product">
          <EditStyle image={editButton} />
        </Link>
        <DetailsStyle>Ver Detalhes</DetailsStyle>
      </DivBttonsStyle>
    </ProductStyle>
  );
};

ProductCard.propTypes = {
  product: PropTypes.objectOf(PropTypes.any).isRequired,
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  setProducts: PropTypes.func.isRequired,
};

export default ProductCard;
