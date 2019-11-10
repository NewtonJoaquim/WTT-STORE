import { ADD_BOOK, REMOVE_ALL_BOOKS, REMOVE_BOOK,} from "../actions/shopCart.action";

const INITIAL_STATE = [];

const shopCartReducer = (state=INITIAL_STATE, action) =>{
    switch(action.type){
        case ADD_BOOK:
            let id ;
            if(state.length===0){
                id = 0;
            }
            else{
                id = state[state.length-1].id + 1
            }
            let newState = {...action.payload, id}
            return [...state, newState];
        case REMOVE_ALL_BOOKS:
            state = [];
            return state;
        case REMOVE_BOOK:
            return state.filter(book => book.id !== action.payload);
        default:
            return state;
    }
}

export default shopCartReducer;