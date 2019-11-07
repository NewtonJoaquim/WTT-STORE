export const ADD_BOOK = 'ADD_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';
export const REMOVE_ALL_BOOKS = 'REMOVE_ALL_BOOKS';
export const CREATE_BOOK = 'CREATE_BOOK';

export function addBook(book){
    return(dispatch) => {
        dispatch({
            type:ADD_BOOK,
            payload: book
        });
    }
}

export function removeBook(book_id){
    return(dispatch) => {
        dispatch({
            type: REMOVE_BOOK,
            payload: book_id
        });
    }
}

export function removeAllBooks(){
    return((dispatch) => {
        dispatch({
            type:REMOVE_ALL_BOOKS
        })
    })
}