import { useState } from 'react'
import style from './SeachBar.module.css'

function SearchBar({ onSearch }) {
   const [txt, setText] = useState("")
   
   
   function handleChange(event) {
      setText(event.target.value)
   }

   
   return (
      <div>
         <input className={style.Barra} type='search' value={txt} onChange={handleChange}/>
         <button className={style.Boton} onClick={() => onSearch(txt)}>Buscar</button>
      </div>
   );
}
export default SearchBar;
