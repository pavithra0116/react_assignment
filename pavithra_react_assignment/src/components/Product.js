import React, { Component } from "react";
import ProductList from "./ProductList";
import "./Product.css";
import { Link } from "react-router-dom";
class Product extends Component {
   handleClick = (event) => {
    var currentPage = Number(event.target.id);
    this.props.handlePageClick(currentPage);
  }
  render() {
    const todosPerPage = 10;
    const currentPage = this.props.current_page;
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = this.props.products.slice(indexOfFirstTodo, indexOfLastTodo);
    const renderTodos = currentTodos.map((todo, index) => {
      return <ProductList product={todo} key={index} deleteProduct={this.props.deleteProduct} editProduct={this.props.editProduct} />
    });
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(this.props.products.length / todosPerPage); i++) {
      pageNumbers.push(i);
    }
    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <button className="paginationStyle"
          key={number}
          id={number}
          onClick={this.handleClick}
        >
          {number}
        </button>
      );
    });
    return (
      <div>
        <Link to="/addnew" type="button">ADD PRODUCT</Link>
        <table className="table_border">
          <thead className="table_heading">
            <tr className="table-align">
              <th>ID</th>
              <th>Product_Name</th>
              <th>Price</th>
              <th>Size</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody className="row products-list">
            {renderTodos}</tbody>
        </table>
        <ul id="page-numbers">
          {renderPageNumbers}
        </ul>
      </div>
    )
  }
}
export default Product;