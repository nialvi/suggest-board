const PREFIX = 'APP/';

export const ADD_NEW_SUGGEST = `${PREFIX}ADD_NEW_SUGGEST`;
export const DELETE_SUGGEST = `${PREFIX}DELETE_SUGGEST`;

export const defaultSuggestData = {
  author: 'Anon',
  title: 'New suggest',
  text: '',
  rating: 0,
  date: +new Date()
}

export const addNewSuggest = (lastID = 0, suggest = defaultSuggestData) => ({
    type: ADD_NEW_SUGGEST,
    payload: {
      id: lastID + 1, 
      ...suggest
    }
});


export const deleteSuggest = (id) => ({
  type: DELETE_SUGGEST,
  payload: id
});
