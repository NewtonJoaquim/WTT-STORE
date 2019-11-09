import React from "react";
import { connect } from 'react-redux';
import data from '../../books.json'
import Button from '@material-ui/core/Button';

import { addBook } from "../../actions/shopCart.action";


class BookDetails extends React.Component {

    componentDidMount() {
        console.log(this.props.match.params.code);
        console.log(data.books)
    }

    onAddBookClicked(book){
        alert("Livro adicionado ao seu carrinho");
        this.props.addBook(book);
        this.props.history.push('/booklist');
      }

    render() {
        return (
            <div>
                {data.books.map(element => {
                    if (element.code.toString() === this.props.match.params.code.toString()) {

                        return (
                            <div key={element.code}>
                                <h1>
                                    {element.name}
                                </h1>
                                <h2>Preço: {element.price}</h2>
                                <p>{element.description}</p>

                                <Button variant="outlined" color="primary" onClick={() =>this.onAddBookClicked(element)}>
                                    Adicionar ao Carrinho
                                </Button>
                            </div>
                        )
                    }
                    //return(<div>{element.code}</div>)

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

export default connect(mapStateToProps, {addBook})(BookDetails);