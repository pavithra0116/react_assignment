import React, { Component } from 'react';
import './App.css';
import Product from "./components/Product"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as productActions from "./actionCreators/products";
import { withRouter } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddNewProd from "./components/AddNewProd";
import EditProduct from "./components/EditProduct";
class App extends Component {
   componentWillMount() {
    this.props.actions.getProducts();
  }
  handleDeleteProduct = (product_id) => {
    if (window.confirm("Do you really want to delete?")) {
      this.props.actions.deleteProduct(product_id);
      window.location.href = "/";
    }
    else {
      window.location.href = "/";
    }
  }
  handleEditProduct = (data) => {
    this.props.actions.edit_Product(data);
  }
  handle_editSuccess = (edited_Item) => {
    this.props.actions.editSuccess(edited_Item);
  }
  onClickEdit = (new_data) => {
    this.props.actions.onEditSuccess(new_data);
    window.location.href = "/";
  }
  handleAddProduct = (formdata) => {
    this.props.actions.addProduct(formdata);
    window.location.href = "/";
  }
  handlePageClick = (current_page) => {
    this.props.actions.pagination(current_page);
  }
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" render={props => this.props.isLoad?("Loading...."):(
              <Product
                products={this.props.products}
                deleteProduct={this.handleDeleteProduct}
                editProduct={this.handleEditProduct}
                current_page={this.props.current_page}
                handlePageClick={this.handlePageClick}
              />
            )} />
            <Route exact path="/addnew" render={props => (
              < AddNewProd addProduct={this.handleAddProduct} />
            )} />
            <Route exact path="/edit" render={props => (
              < EditProduct editProduct={this.handleEditProduct}
                edited={this.props.edited}
                editSuccess={this.handle_editSuccess}
                onClickEdit={this.onClickEdit} />
            )} />
          </Switch>
        </Router>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    isLoad:state.isLoading,
    products: state.products,
    edited: state.edited,
    current_page: state.current_page
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(productActions, dispatch)
  };
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

