import React from "react";
import { connect } from 'react-redux';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import RemoveIcon from "@material-ui/icons/Remove";

import { removeBook, removeAllBooks } from "../../actions/shopCart.action";

class ShoppingCart extends React.Component {

    componentDidMount() {
        console.log(this.props.shopCart);
    }

    render() {
        return (
            <div>
                {this.props.shopCart.map(element => {
                    return (
                        <div style={{display:'flex'}}>
                            <li key={element.id} style={{ padding: 10 }}>
                                {element.name} ({element.price})
                            </li>
                            <button><RemoveIcon /></button>
                        </div>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        shopCart: state.shopCart
    }
}

export default connect(mapStateToProps, { removeBook, removeAllBooks })(ShoppingCart);