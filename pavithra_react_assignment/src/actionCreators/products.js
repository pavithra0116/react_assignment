import {
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,
  DELETE_PRODUCT,
  ADD_PRODUCT,
  EDIT_PRODUCT,
  EDIT_SUCCESS,
  ON_EDIT_SUCCESS,
  PAGINATION
} from "../actionTypes/products";
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
  return {
    type: GET_PRODUCTS_FAILURE,
    error
  };
}
export function deleteProduct(products) {
  return {
    type: DELETE_PRODUCT,
    products
  };
}
export function addProduct(formdata) {
  return {
    type: ADD_PRODUCT,
    formdata
  };
}
export function edit_Product(edited_data) {
  return {
    type: EDIT_PRODUCT,
    edited_data
  };
}

export function editSuccess(edited_Item) {
  return {
    type: EDIT_SUCCESS,
    edited_Item
  }
}

export function onEditSuccess(new_data) {
  return {
    type: ON_EDIT_SUCCESS,
    new_data
  }
}

export function pagination(current_page) {
  return {
    type: PAGINATION,
    current_page
  }
}




