import React from "react";
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Modal from '@material-ui/core/Modal';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import ShoppingCart from "../shoppingCart";
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
          <List style={{ flex: 'auto' }}>
            {data.books.map(element => {
              return (
                <div key={element.code}>
                  <ListItem button onClick={() => this.props.history.push(`/book-details/${element.code}`)}>
                    <ListItemText primary={element.name} secondary={element.subtitle} />
                  </ListItem>
                </div>
              )
            })}

          </List>
          <Paper>
            <Typography variant="h5" component="h3">
              Carrinho
            </Typography>
            <ShoppingCart />
            <Button color="primary" onClick={this.onFinalizarCompraClicked} style={{ marginTop: 10 }}>
              <ShoppingCartIcon />
              Finalizar Compra
            </Button>
          </Paper>
          <Modal
            open={this.state.modalOpen}
            onClose={() => this.setState({ modalOpen: false })}
          >
            <Paper style={{ justifyContent: 'center', alignItems: 'center' }}>
              <CheckoutForm
                userName={this.state.username}
                setUsername={event => this.setState({ username: event.target.value })}
                birthday={this.state.birthday}
                setBirthday={event => this.setState({ birthday: event.target.value })}
                email={this.state.email}
                setEmail={event => this.setState({ email: event.target.value })}
                handleClick={this.onFormFinished} />
            </Paper>
          </Modal>
        </div>
      </div>
    );
  }
}


export default connect(null, { removeAllBooks })(BookList);