import React from "react";
import { connect } from 'react-redux';
import data from '../../books.json'
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import Popover from '@material-ui/core/Popover';
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
          <div key={element.code}>
          {/* <li key={element.code} style={{padding:10}} > */}
          {/* {element.name} */}
          <Button variant="outlined" color="primary" onClick={() => this.props.history.push(`/book-details/${element.code}`)}>
            {element.name}
          </Button>
          {/* </li> */}
          </div>
          )
      })}
      <Fab color="primary" aria-label="shop" onClick={() => this.props.history.push('/shopping-cart')} onMouseEnter={() => alert('teste')}>
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