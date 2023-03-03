import { useSelector,useDispatch } from "react-redux";
import style from "./Favorites.module.css";
import { Link } from "react-router-dom";
import React from "react";
import { orderCards } from "../../Redux/actions";

const Favorites = () => {
    const {myFavorites} = useSelector(state => state);
    const dispatch = useDispatch();

    const handlerOrder = (event) => {
        dispatch(orderCards(event.target.value))    
    }

    const handlerFilter = (event) => {
        dispatch(filterCards(event.target.value))    
    }


    return(
        <div>
            <div>
                <select onchange={handlerOrder}>
                    <option value="order" disabled='disabled'>Order by</option>
                    <option value="Ascendente">Ascendente</option>
                    <option value="Descendente">Descendente</option>
                </select>
                <select onchange={handlerFilter}>
                    <option value="filter" disabled='disabled'>Filter by</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Unknown">Unknown</option>
                    <option value="Genderless">Genderless</option>
                </select>
            </div>
            {
                myFavorites.map((character) => {
                    return (
                        <div className={style.Borde}>
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