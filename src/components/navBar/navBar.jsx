import SearchBar from "../searchbar/SearchBar";
import { Link } from "react-router-dom";

import  "./navBar.css";

export default function NavBar({onSearch, random}) {
    return (
    <div className="nav-container">

<div>
    <Link to="/about">About</Link>
    <Link to="/home">Home</Link>
    <Link to="/favorites">Favs</Link>
</div>


        <SearchBar onSearch={onSearch}/>

        <button className="random" onClick={random}>
            ADD RANDOM 
        </button>
    </div>
    );
}

