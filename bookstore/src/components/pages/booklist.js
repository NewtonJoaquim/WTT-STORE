import React from "react";
import data from '../../books.json'
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import {useHistory} from 'react-router-dom'

const BookList =() => {
  
    let history = useHistory();
    return (
    <div>
      {data.books.map(element => {
        return (
          <li key={element.id} style={{padding:10}}>
          {element.name}
          <Button variant="outlined" color="primary">
            Detalhes
          </Button>
          <Button variant="outlined" color="secondary">
            Adicionar ao carrinho
          </Button>
          </li>
          )
      })}
      <Fab color="primary" aria-label="shop" onClick={() => history.push('/shopping-cart')}>
        <ShoppingCartIcon />
      </Fab>
      </div>
      );
}

export default BookList;