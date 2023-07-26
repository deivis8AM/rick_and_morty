import { connect } from "react-redux";
import Cards from "../../components/cards/Cards";

function Favorites({favorites}) {
    return (
        <div>
            <Cards charecter={favorites}/>
        </div>
    );
}


const mapStateToProps = (state) => {
    return {
        favorites: state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites);