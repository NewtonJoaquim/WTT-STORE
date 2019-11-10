import React from "react";
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Modal from '@material-ui/core/Modal';

import ShoppingCart from "../shopping-cart";
import data from '../../books.json'
import CheckoutForm from "../checkoutForm";
import { removeAllBooks } from "../../actions/shopCart.action";

class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      birthday: "",
      email: "",
      modalOpen: false,
    }

    this.onFinalizarCompraClicked.bind(this);
  }

  onAddBookClicked(book) {
    this.props.addBook(book);
  }

  onFinalizarCompraClicked = () => {
    this.setState({ modalOpen: true })
    //this.props.history.push('/shopping-cart')
  }

  onFormFinished = () => {
    alert("Compra Finalizada!");
    this.props.removeAllBooks();
    this.setState({ modalOpen: false });
  }

  render() {
    return (
      <div>
        <h2>Lista de Livros:</h2>
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
            <Button color="primary" onClick={this.onFinalizarCompraClicked} style={{ marginTop: 10 }}>
              <ShoppingCartIcon />
              Finalizar Compra
      </Button>
          </div>
          <div>
            <h3>Carrinho</h3>
            <ShoppingCart />
          </div>
          <Modal
            open={this.state.modalOpen}
            onClose={() => this.setState({ modalOpen: false })}
          >
            <div style={{ justifyContent: 'center', alignItems: 'center' }}>
              <CheckoutForm
                userName={this.state.username}
                setUsername={event => this.setState({ username: event.target.value })}
                birthday={this.state.birthday}
                setBirthday={event => this.setState({ birthday: event.target.value })}
                email={this.state.email}
                setEmail={event => this.setState({ email: event.target.value })}
                handleClick={this.onFormFinished} />
            </div>
          </Modal>
        </div>
      </div>
    );
  }
}


export default connect(null, { removeAllBooks })(BookList);