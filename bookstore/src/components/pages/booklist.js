import React from "react";
import data from '../../books.json'
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import ShoppingCart from "./shopping-cart";

class BookList extends React.Component {
  constructor(props) {
    super(props);
  }

  onAddBookClicked(book) {
    this.props.addBook(book);
  }

  render() {
    return (
      <div style={{ display: 'flex', flex: 'auto' }}>
        <div style={{ flex: 'auto' }}>
          {data.books.map(element => {
            return (
              <div key={element.code}>
                <Button variant="outlined" color="primary" onClick={() => this.props.history.push(`/book-details/${element.code}`)}>
                  {element.name}
                </Button>
              </div>
            )
          })}
          <Button color="primary" onClick={() => this.props.history.push('/shopping-cart')} style={{ marginTop: 10 }}>
            <ShoppingCartIcon />
            Finalizar Compra
      </Button>
        </div>
        <div>
          <h3>Carrinho</h3>
          <ShoppingCart />
        </div>
      </div>
    );
  }
}


export default BookList;