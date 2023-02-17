import style from './Card.module.css'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { addFavorite, deleteFavorite } from '../../Redux/actions';

export default function Card({name, gender, onClose, species, image, id}) {
   const dispatch = useDispatch();
   const myFavorites = useSelector(state => state.myFavorites) 
   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         dispatch(deleteFavorite(id))
      }
      else {
         setIsFav(true);
         dispatch(addFavorite({name, gender, onClose, species, image, id}))
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);


   return (
      <div className={style.Borde}>
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
               ) : (
               <button onClick={handleFavorite}>🤍</button>
               )
         }


         <button className={style.Cruz} onClick={onClose}>X</button>
         <img className={style.imagen} src={image} alt={name} />
         <Link to = {`/Detail/${id}`}>

         <h2 className={style.Nombre}>{name}</h2>
         </Link>
         <h2 className={style.species}>{species}</h2>
         <h2 className={style.gender}>{gender}</h2>
      </div>
   );
}
