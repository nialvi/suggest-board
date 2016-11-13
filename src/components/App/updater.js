import { Updater } from 'redux-elm';
import { 
  ADD_NEW_SUGGEST,
  DELETE_SUGGEST,
} from './actions';

import { initListSuggest } from './mock';

export const init = (arraySuggest = []) => ({
  list: [...arraySuggest]
});

export default new Updater(init(initListSuggest))
    .case(ADD_NEW_SUGGEST, (model, action) => ({...model, list: [...model.list, action.payload]}))
    .case(DELETE_SUGGEST, (model, { payload }) => ({...model, list: model.list.filter(elem => (elem.id !== payload))}))
    .toReducer();
