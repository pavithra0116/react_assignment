import {
    GET_PRODUCTS,
    GET_PRODUCTS_SUCCESS,
    GET_CATEGORY_SUCCESS
} from "../actionTypes/relatedProduct";
export default (
    prevState = {
        products: [],
        categories: []
    },
    action
) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...prevState,
            };
        case GET_PRODUCTS_SUCCESS:
            return {
                ...prevState,
                products: action.products,
            };
        case GET_CATEGORY_SUCCESS:
            return {
                ...prevState,
                categories: action.categories,
            };
        default:
            return prevState;
    }
};