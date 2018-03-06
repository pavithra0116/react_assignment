import React, { Component } from "react";
class EditProduct extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit_eidt = this.handleSubmit_eidt.bind(this);
  }
  handleSubmit_eidt(e) {
    const edited_Item = {};
    const name = e.target.name;
    const value = e.target.value;
    edited_Item[name] = value;
    this.props.editSuccess(edited_Item);
  }
  render() {
    return (
      <div>
       
          Product_Name:<input name="productName" type='text' defaultValue={this.props.edited.productName}
            onChange={(e) => { this.handleSubmit_eidt(e) }} /><br />
          Price:  <input name="price" type='text' defaultValue={this.props.edited.price}
            onChange={(e) => { this.handleSubmit_eidt(e) }} /><br />
          Size:  <input name="size" type='text' defaultValue={this.props.edited.size}
            onChange={(e) => { this.handleSubmit_eidt(e) }} /><br />
          <button onClick={() => { this.props.onClickEdit(this.props.edited) }}>Submit</button>
     
      </div>
    );
  }
}
export default EditProduct;