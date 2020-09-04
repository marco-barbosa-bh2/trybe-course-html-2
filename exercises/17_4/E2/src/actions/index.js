import charAPI from '../services/charAPI';
export const REQUEST_API = 'REQUEST_API';
export const RECEIVE_API = 'RECEIVE_API';
export const RECEIVE_API_ERROR = 'RECEIVE_API_ERROR';

const requestCharacter = () => ({ // action creator que retorna um objeto, que você tem feito até então
  type: REQUEST_API,
});

const receiveCharacter = (data) => ({ // outro action creator que retorna um objeto, que você tem feito até então
  type: RECEIVE_API,
  name: data.name,
  gender: data.gender,
  aliases: data.aliases,
  books: data.books,
});

const receiveCharacterError = (error) => ({
  type: RECEIVE_API_ERROR,
  error,
});

export function fetchCharacters(char) { // action creator que retorna uma função, possível por conta do pacote redux-thunk
  return (dispatch) => { // thunk declarado
    dispatch(requestCharacter());
    return charAPI(char)
      .then(
        (dataJson) => {
          if (dataJson.length) {
            dispatch(receiveCharacter(dataJson[0]));
          }
          else {
            dispatch(receiveCharacterError('Character not found!'));
          }
        },
      )
      .catch((error) => dispatch(receiveCharacterError(error)));
  };
}
