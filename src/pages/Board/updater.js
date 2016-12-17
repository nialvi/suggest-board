import { Updater, Matchers } from 'redux-elm';
import { 
  ADD_NEW_SUGGEST,
  DELETE_SUGGEST,
} from './actions';

import { initListSuggest } from './mock';

import UpdaterSuggestPreview from '../../components/SuggestPreview/updater';

export const init = (arraySuggest = []) => ({
  list: [...arraySuggest]
});

export default new Updater(init(initListSuggest))
    .case(ADD_NEW_SUGGEST, (model, action) => ({...model, list: [...model.list, action.payload]}))
    .case(DELETE_SUGGEST, (model, { payload }) => ({...model, list: model.list.filter(elem => (elem.id !== payload))}))
    .case('SuggestPreview', (model, action) => {
        const numericSuggestPreviewView = parseInt(action.matching.args.param, 10);

        return {
          ...model,
          list: model.list.map((suggest, index) => {
            if (index === numericSuggestPreviewView) {
              return UpdaterSuggestPreview(suggest, action);
            } else {
              return suggest;
            }
          })
        };
     }, Matchers.parameterizedMatcher)
    .toReducer();
