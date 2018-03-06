import {
  getProductsSuccess,
  getProductsFailure
} from "../actionCreators/products";
import { put, takeLatest } from "redux-saga/effects";
import { GET_PRODUCTS, DELETE_PRODUCT, ADD_PRODUCT, ON_EDIT_SUCCESS } from "../actionTypes/products";
function* getProducts() {
  let url = "http://localhost:4000/products";
  try {
    let products = yield fetch(url).then(r =>
      r.json()
    );
    yield put(getProductsSuccess(products));
  } catch (error) {
    yield put(getProductsFailure(error));
  }
}
function* deleteProduct(actions) {
  try{
  let products = yield fetch(`http://localhost:4000/products/${actions.products}`, {
    method: 'DELETE'
  }).then(r => r.json());
      yield put(getProductsSuccess(products));
  } catch (error) {
    yield put(getProductsFailure(error));
  }
}
function* addProducts(actions) {
  try {
    let product = yield fetch("http://localhost:4000/products", {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify(actions.formdata)
    }).then(result => result.json());
    yield put(getProductsSuccess(product));
  }
  catch (error) {
    yield put(getProductsFailure(error));
  }
}
function* onEditSuccess(action) {
  try {
    let product = yield fetch(`http://localhost:4000/products/${action.new_data.id}`, {
      method: 'PUT',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify(action.new_data)
    }).then(result => result.json());
    yield put(getProductsSuccess(product));
  }
  catch (error) {
    yield put(getProductsFailure(error));
  }
}
export function* getProductsWatcher() {
  yield [takeLatest(GET_PRODUCTS, getProducts),
  takeLatest(DELETE_PRODUCT, deleteProduct),
  takeLatest(ADD_PRODUCT, addProducts),
  takeLatest(ON_EDIT_SUCCESS, onEditSuccess)];
}
