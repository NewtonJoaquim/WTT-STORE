import React from "react";
import { connect } from 'react-redux';
import data from '../../books.json'
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import { addBook } from "../../actions/shopCart.action";

class BookList extends React.Component {
    constructor(props){
      super(props);
    }

    onAddBookClicked(book){
      this.props.addBook(book);
    }

    render(){
    return (
    <div>
      {data.books.map(element => {
        return (
          <li key={element.code} style={{padding:10}} onClick={() => this.props.history.push(`/book-details/${element.code}`)}>
          {element.name}
          <Button variant="outlined" color="primary">
            Detalhes
          </Button>
          <Button variant="outlined" color="secondary" onClick={() =>this.onAddBookClicked(element)}>
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

const mapStateToProps = (state) => {
  return{
    shopCart: state.shopCart 
  }
}

export default connect(mapStateToProps, {addBook})(BookList);