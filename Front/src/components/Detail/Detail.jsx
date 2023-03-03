import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Detail = () => {
    const {DetailId} = useParams();
    const [character, setCharacter] = useState();

    useEffect(() => {
        fetch(`http://localhost:3001/rickandmorty/detail/${DetailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [DetailId]);

    return(
        <div>
            <button>
                <Link to = '/Home'>Home</Link>
            </button>
            <h1>{character.name}</h1>
            <p>{character.status}</p>
            <p>{character.species}</p>
            <p>{character.gender}</p>
            <p>{character.origin.name}</p>
            <img src="{character.image}" alt="{character.name}" />
        </div>
    )
}

export default Detail;