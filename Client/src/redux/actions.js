import axios from "axios"; // Importamos a axios
export const ADD_FAV = "ADD_FAV"
export const REMOVE_FAV = "REMOVE_FAV"
export const ORDER = "ORDER";
export const FILTER = "FILTER";
export const RESET = "RESET"



export const addFavorite = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return (dispatch) => {
       axios.post(endpoint, character).then(({ data }) => {
          return dispatch({
             type: ADD_FAV,
             payload: data,
          });
       });
    };
 };

// export function addFavorite(character){
//     return {
//         type: ADD_FAV,
//         payload: character
//     };
// }

export const removeFavarite = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return (dispatch) => {
       axios.delete(endpoint).then(({ data }) => {
          return dispatch({
             type: REMOVE_FAV,
             payload: data,
       });
       });
    };
 };

// export function removeFavarite (id){
//     return {
//         type: REMOVE_FAV,
//         payload: id 
//     };
// }

export function orderFavorites(order) {
    return {
        type: ORDER,
        payload: order,
    };
}

export function filterFavorites(gender) {
    return {
        type: FILTER,
        payload: gender,
    };
}

export function resetFavorites() {
    return {
        type: RESET,
    };
}