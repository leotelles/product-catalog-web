import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';

import { StyledForm } from './styles';

import api from '../../services/api';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  complete: {
    width: '100%',
  },
}));

const Product = () => {
  const classes = useStyles();

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: 0,
    un: '',
    available: true,
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    await api
      .post('products', formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <StyledForm
      onSubmit={handleSubmit}
      className={classes.root}
      noValidate
      autoComplete="off"
    >
      <TextField
        className={classes.complete}
        id="filled-basic"
        label="Nome"
        variant="filled"
        name="name"
        onChange={handleInputChange}
      />
      <TextField
        className={classes.complete}
        id="filled-basic"
        label="Descrição"
        variant="filled"
        name="description"
        onChange={handleInputChange}
      />
      <TextField
        className={classes.price}
        id="filled-basic"
        label="Preço"
        InputProps={{
          startAdornment: <InputAdornment position="start">R$</InputAdornment>,
        }}
        variant="filled"
        name="price"
        onChange={handleInputChange}
      />
      <TextField
        id="filled-basic"
        label="UN"
        variant="filled"
        name="un"
        onChange={handleInputChange}
      />
      <FormControlLabel
        control={
          <Checkbox
            checked
            name="available"
            color="primary"
            onChange={handleInputChange}
          />
        }
        label="Disponível"
      />
      <Button type="submit" variant="outlined" color="primary">
        Primary
      </Button>
    </StyledForm>
  );
};

export default Product;
