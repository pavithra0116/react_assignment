import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Product.css";
class ProductList extends Component {
  render() {
    return (
      <tr className="table-align">
        <td>{this.props.product.id}</td>
        <td>{this.props.product.productName}</td>
        <td>{this.props.product.price}</td>
        <td>{this.props.product.size}</td>
        <td><Link to="/edit" onClick={() => { this.props.editProduct(this.props.product) }}>EDIT</Link></td>
        <td><button onClick={() => { this.props.deleteProduct(this.props.product.id) }}>DELETE</button></td>
      </tr>)
  }
}
export default ProductList;


