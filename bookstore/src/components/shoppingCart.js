import React from "react";
import { connect } from 'react-redux';
import RemoveIcon from "@material-ui/icons/Remove";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';

import { removeBook, removeAllBooks } from "../actions/shopCart.action";

class ShoppingCart extends React.Component {

    onRemoveClicked(id) {
        this.props.removeBook(id);
    }

    render() {
        return (
            <List>
                {this.props.shopCart.map(element => {
                    return (
                        <div style={{ display: 'flex' }} key={element.id}>
                            {/* <li key={element.id} style={{ padding: 10 }}>
                                {element.name} ({element.price})
                            </li> */}
                            <ListItem>
                                <ListItemText primary={element.name} secondary={element.price}></ListItemText>
                            </ListItem>
                            <Button onClick={() => this.onRemoveClicked(element.id)}><RemoveIcon /></Button>
                        </div>
                    )
                })}
            </List>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        shopCart: state.shopCart
    }
}

export default connect(mapStateToProps, { removeBook, removeAllBooks })(ShoppingCart);