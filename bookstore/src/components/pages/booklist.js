import React from "react";
import data from '../../books.json'

export default class BookList extends React.Component {
  componentDidMount(){
    console.log(data.books[0]);
  }
  
  render() {
    return (
    <div>
      {data.books.map(element => {
        return element.name
      })}
      </div>
      );
  }
}
