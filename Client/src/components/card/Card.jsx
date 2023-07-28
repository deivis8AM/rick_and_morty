import { useNavigate } from "react-router-dom";
import { connect } from 'react-redux';
import { useState, useEffect } from "react";
import { addFavorite, removeFavarite } from "../../redux/actions";
import style from "./card.module.css"




 function Card(props) {
   const navigate = useNavigate();
   const {character, onClose, addFavorite, removeFavarite, favorites} = props;
   const {image, name, epecies, gender, id} = character;

   const [closeBtn, setCloseBtn] = useState(true);
   const [fav, setFav] = useState(false);

useEffect(() => {
   if(!onClose){
      setCloseBtn(false);
   }
},[])


   useEffect(() => {
      favorites.forEach((fav) => {
         if (fav.id === id) {
            setFav(true);
         }
      });
   }, [favorites]);

function navigateHandler(){
   navigate(`/detail/${character.id}`);
}   

 function handleFavorite(character){

   if(!fav){
      addFavorite(character);
      setFav(true);
   } else{
      removeFavarite(character);
      setFav(false);
   }
 }
 
   return (
         <div className={style.cardContainer}>
         <div className={style.imageContainer}>
            <img className={style.characterImage} src={character.image}
             alt={character.name} 
            onClick={navigateHandler}/> 
            <h2 className={style.name}>{character.name}</h2>

            {
   fav ? (
      <button onClick={() => handleFavorite(character.id)}>❤️</button>
   ) : (
      <button onClick={() => handleFavorite(character)}>🤍</button>
   )
}
{closeBtn && (
<button className={style.closeButton}
 onClick={()=>{
   onClose(character.id)}}>X</button>)}

      
         </div>

         <div className={ style.atributes }>
            <h2> {character.species }</h2>
            <h2> {character.gender }</h2>
         </div>
      </div>
   );
}
    
const mapDispatchToProps = (dispatch) => {
   return {
      addFavorite: (character) => dispatch(addFavorite(character)),

      removeFavarite: (id) => dispatch(removeFavarite(id)),
   };
};

const mapStateToProps = (state) => {
   return {
      favorites: state.myFavorites,
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card)