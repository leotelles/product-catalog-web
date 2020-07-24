import React from 'react';
import { Link } from 'react-router-dom';

import { Container, StyledButton } from './styles';

const Main = () => {
  return (
    <Container>
      <Link to="/catalog" style={{ textDecoration: 'none' }}>
        <StyledButton>Ver Catálogo</StyledButton>
      </Link>
    </Container>
  );
};

export default Main;
