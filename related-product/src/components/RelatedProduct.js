import React, { Component } from "react";

export default class RelatedProduct extends Component {
    tableHeader = (products) => {
        return (
            <div class="container">
                <table class="table table-striped">
                    <thead>
                        <th>Image</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Add to Cart</th>
                    </thead>
                    {products.map(p => {
                        return this.tableRow(p);
                    })}
                </table>
            </div>
        );
    }
    tableRow = (products) => {
        return (
            <tr>
                <td><img src={products.ProductImage} alt="product_image" /></td>
                <td>{products.ProductName}</td>
                <td>{products.ProductPrice}</td>
                <td>
                    <button class="btn btn-primary" href="prd-desc.html">Description</button>
                </td>
                <td>
                    <button class="btn btn-success">Add to Cart</button>
                </td>
            </tr>
        );
    }
    render() {
        return (
            <div>
                <div>{this.tableHeader(this.props.products)}</div>
            </div>
        );
    }
}
