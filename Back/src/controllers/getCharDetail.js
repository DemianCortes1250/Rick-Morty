const axios = require('axios');

const getCharDetail = (res,id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then ((response) => response.data)
    .then(data => {
        let character = {
            name: data.name,
            image: data.image,
            gender: data.gender,
            species: data.species,
            status: data.status,
            origin: data.origin.name
        }
    res
        .writeHead(200, {"Content-type":"application/json"})
        .end(JSON.stringify(character))
})
    .catch(err => res.whiteHead(500, {"Content-type":"text/plain"})
    .end(err.message))

}

module.exports = getCharDetail;