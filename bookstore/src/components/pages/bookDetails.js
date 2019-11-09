import React from "react";
import { connect } from 'react-redux';
import data from '../../books.json'


class BookDetails extends React.Component {

    componentDidMount() {
        console.log(this.props.match.params.code);
        console.log(data.books)
    }

    render() {
        return (
            <div>
                {data.books.map(element => {
                    if(element.code === this.props.match.params.code){
                        return(
                            <div>
                                <li>
                                    element.name
                                </li>
                            </div>
                        )
                    }
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

export default connect(mapStateToProps, {})(BookDetails);