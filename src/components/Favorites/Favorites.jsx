import { useSelector } from "react-redux";
import style from "./Favorites.module.css";
import { Link } from "react-router-dom";
import React from "react";


const Favorites = () => {
    const {myFavorites} = useSelector(state => state)
    return(
        <div>
            {
                myFavorites.map((character) => {
                    return (
                        <div key = {character.id} className={style.Borde}>
                        <img className={style.imagen} src={character.image} alt={character.name}/>
                        <Link to = {`/Detail/${character.id}`}>
               
                        <h2 className={style.Nombre}>{character.name}</h2>
                        </Link>
                        <h2 className={style.species}>{character.species}</h2>
                        <h2 className={style.gender}>{character.gender}</h2>
                     </div>
                    )
                })
            }
        </div>
    )
}

export default Favorites;