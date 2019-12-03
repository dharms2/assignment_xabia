
import axios from 'axios';

export function getPlanetSuggestions(input, uri, sucessCB, errorCB) {
    axios.get(uri + input).then((response) => {
        sucessCB(response);
    }).catch((error) => {
        errorCB(error);
    })
}

export function getAllPlanets(uri, sucessCB, errorCB) {
    axios.get(uri).then((response) => {
        sucessCB(response)
    }).catch(error => {
        errorCB(error)
    })
}