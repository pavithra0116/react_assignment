import React, { Component } from 'react';
import DashBoard from "./components/DashBoard";
import Home from "./components/Home";
import RelatedProduct from "./components/RelatedProduct";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as productActions from "./actionCreators/RelatedProd_Action";
import { withRouter } from "react-router-dom";

class App extends Component {
  componentWillMount() {
    this.props.actions.getProducts();
    this.props.actions.getcategories();
  }
  selectedCategory = (category_id) => {
    this.props.actions.category_selected(category_id);
  }
  render() {
    return (
      <div>
        <DashBoard />
        <Home
          category={this.props.category}
          select={this.selectedCategory} />
        <RelatedProduct
          products={this.props.products} />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    products: state.products,
    category: state.categories
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(productActions, dispatch)
  };
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
