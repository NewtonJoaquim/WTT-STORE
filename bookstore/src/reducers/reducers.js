import { combineReducers } from "redux";
import shopCartReducer from "./shopCart.reducer";

export default combineReducers({
    shopCart: shopCartReducer
});
