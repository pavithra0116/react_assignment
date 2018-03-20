import {
  getProductsSuccess,
  getProductsFailure,
  getcategories_success,
  getcategories_failure,
} from "../actionCreators/RelatedProd_Action";
import { put, takeLatest } from "redux-saga/effects";
import { GET_PRODUCTS,GET_CATEGORY,GET_CATEGORY_ID } from "../actionTypes/relatedProduct";

function* getProducts() {
  let url = "http://172.16.101.238:3000/api/category/getAllProducts";
  try {
    let products = yield fetch(url).then(r =>
      r.json()
    );
    yield put(getProductsSuccess(products));
  } catch (error) {
    yield put(getProductsFailure(error));
  }
}

function* getcategories() {
  let url = "http://172.16.101.238:3000/api/category";
  try {
    let categories = yield fetch(url).then(r =>
      r.json()
    );
    yield put(getcategories_success(categories));
  } catch (error) {
    yield put(getcategories_failure(error));
  }
}

function* category_selected(actions)
{
try {
  let product = yield fetch(`http://172.16.101.238:3000/api/category/getProductCategoryId/${actions.category_id}`)
 .then(result => result.json());
  yield put(getProductsSuccess(product));
}
catch (error) {
  yield put(getProductsFailure(error));
}
}
export function* getProductsWatcher() {
  yield [takeLatest(GET_PRODUCTS, getProducts),takeLatest(GET_CATEGORY, getcategories),takeLatest(GET_CATEGORY_ID, category_selected)];
}
