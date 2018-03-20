import {
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,
  GET_CATEGORY,
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_FAILURE,
  GET_CATEGORY_ID
} from "../actionTypes/relatedProduct";

export function getProducts() {
  return {
    type: GET_PRODUCTS
  };
}
export function getProductsSuccess(products) {
  return {
    type: GET_PRODUCTS_SUCCESS,
    products
  };
}
export function getProductsFailure(error) {
  console.log(error);
  return {
    type: GET_PRODUCTS_FAILURE,
    error
  };
}
export function getcategories() {
  return {
    type: GET_CATEGORY,
  };
}
export function getcategories_success(categories) {
  console.log(categories);
  return {
    type: GET_CATEGORY_SUCCESS,
    categories
  };
}
export function getcategories_failure(error) {
  return {
    type: GET_CATEGORY_FAILURE,
    error
  };
}
export function category_selected(category_id) {
  return {
    type: GET_CATEGORY_ID,
    category_id
  }
}


