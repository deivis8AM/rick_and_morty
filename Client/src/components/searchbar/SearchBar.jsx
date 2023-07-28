import { useState } from "react";
import {
   SearchContainer,
   SearchInput,
} from "./searchBar.styles"

export default function SearchBar(props) {
   const {onSearch} = props;

const [id, setId] = useState("")
  
function changeHandler(e){ 
   e.preventDefault(); // Para prevenir errores en la pagina 
   let input = e.target.value

   setId(input)
}

   return (
      <SearchContainer>
         <SearchInput type='search' value={id} onChange={changeHandler}/>
         <button onClick={() => onSearch(id)}>Agregar</button>
      </SearchContainer>
   );
}
