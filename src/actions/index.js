// we'll need axios
import Axios from 'axios';

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const FETCHING = 'FETCHING';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
export const fetchCharacters = () => dispatch => {
    dispatch({ type: FETCHING });
    Axios.get('https://swapi.co/api/people')
        .then(result => {
            console.log(result);
            dispatch({
                type: SUCCESS,
                payload: result.data
            });
        })
        .catch(error => {
            console.log(error);
            dispatch({
                type: FAILURE,
                payload: error.data
            });
        });
}