import {
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  EDIT_PRODUCT,
  EDIT_SUCCESS,
  PAGINATION
} from "../actionTypes/products";
export default (
  prevState = {
    products: [],
    edited: {},
    current_page: 1,
    isLoading:false
  },
  action
) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...prevState,
        isLoading:true
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...prevState,
        products: action.products,
        isLoading:false
      };
    case EDIT_PRODUCT:
      {
        return {
          ...prevState,
          edited: action.edited_data
        }
      }
    case EDIT_SUCCESS:
      {
        return {
          ...prevState,
          edited: { ...prevState.edited, ...action.edited_Item }
        }
      }
    case PAGINATION:
      {
        return {
          ...prevState,
          current_page: action.current_page
        }
      }
    default:
      return prevState;
  }
};
