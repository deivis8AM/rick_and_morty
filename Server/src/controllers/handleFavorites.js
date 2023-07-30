let myFavorites = []; 

function postFav(req, res){
const character = req.body;  // No es necesario hacer destructurin, porque queremos el objeto completo

myFavorites.push(character);
res.status(200).json(myFavorites)
} 
// post Fav

function deleteFav (req, res) {
    const { id } = req.params;

    const filtered = myFavorites.filter(
    (character) => character.id !== Number(id)
    );
    
    myFavorites = filtered;

    res.status(200).json(filtered);
}
// delete Fav

module.exports = {
    postFav,
    deleteFav,
};