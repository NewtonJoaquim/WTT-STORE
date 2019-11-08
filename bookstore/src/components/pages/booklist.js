import React from "react";
import data from '../../books.json'
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

export default class BookList extends React.Component {
    constructor(props){
      super(props);
    }


    render(){
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
      <Fab color="primary" aria-label="shop" onClick={() => this.props.history.push('/shopping-cart')}>
        <ShoppingCartIcon />
      </Fab>
      </div>
      );
    }
}