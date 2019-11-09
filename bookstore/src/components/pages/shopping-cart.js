import React from "react";
import { connect } from 'react-redux';

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
                        <li key={element.id} style={{ padding: 10 }}>
                            {element.name}
                        </li>
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