import SearchBar from "../SeachBar/SearchBar";
import style from "./Nav.module.css"
import { Link } from "react-router-dom";

const Nav = (props) => {
    return(
        <nav className={style.Fondo}>
         <Link to = '/'>Logout</Link>
         <Link to='About' >About</Link>
         <Link to='Home' >Home</Link>
         <Link to='/favorites' >Favorites</Link>
     <SearchBar onSearch={props.onSearch}/>
        </nav>
    )
}

export default Nav;