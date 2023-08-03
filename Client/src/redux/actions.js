import axios from "axios"; // Importamos a axios
export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const ORDER = "ORDER";
export const FILTER = "FILTER";
export const RESET = "RESET";



export const addFavorite = (character) => { // la fn padre no es la que utiliza el metodo await
    try {  //(2)
        const endpoint = 'http://localhost:3001/rickandmorty/fav';
        return async (dispatch) => {  // (1)Agregamos el metodo async despues del return 
         const {data} = await axios.post(endpoint, character) //(3)
           return dispatch({
            type: ADD_FAV,
              payload: data,
           });
        };
    } catch (error) {
     console.log(error);   //(4)
    }
 };

// export function addFavorite(character){
//     return {
//         type: ADD_FAV,
//         payload: character
//     };
// }

export const removeFavarite = (id) => {
    try { //(3)
        const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
        return async(dispatch) => { // (1)
          const {data} = await axios.delete(endpoint) //(2)
              return dispatch({
                 type: REMOVE_FAV,
                 payload: data,
           });        
        };
    } catch (error) {
      console.log(error);  //(4)
    }
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