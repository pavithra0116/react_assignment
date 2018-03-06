import React, { Component } from "react";
class AddNewProd extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const formData = {};
    for (const field in this.refs) {
      formData[field] = this.refs[field].value;
    }
    this.props.addProduct(formData);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
          Id:<input ref="id" type='text' /><br />
          Product_Name:  <input ref="productName" type='text' /><br />
          Price:  <input ref="price" type='text' /><br />
          Size:  <input ref="size" type='text' /><br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default AddNewProd;