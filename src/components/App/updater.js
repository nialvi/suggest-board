import { Updater } from 'redux-elm';
import { ADD_NEW_SUGGEST, DELETE_SUGGEST } from './actions';

export const init = (arraySuggest = []) => ({
  list: [...arraySuggest]
});

const removeElemFromList = (id, arrayList) => {
  let index = null;
  
  arrayList.forEach((elem, i) => {
    if (elem.id === id) {
    	index = i;
    };
  });

  if (index !== null) {
    return [
      ...arrayList.slice(0, index),
      ...arrayList.slice(index + 1),
    ];
  } else {
    return arrayList;
  }
}

export default new Updater(init())
    .case(ADD_NEW_SUGGEST, (model, action) => ({...model, list: [...model.list, action.payload]}))
    .case(DELETE_SUGGEST, (model, action) => ({...model, list: removeElemFromList(action.payload, model.list)}))
    .toReducer();
