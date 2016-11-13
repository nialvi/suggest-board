'use strict';

import { expect } from 'chai';

import updater, { init } from './updater';
import { 
  defaultSuggestData,
  
  addNewSuggest, 
  ADD_NEW_SUGGEST,

  deleteSuggest,
  DELETE_SUGGEST
} from './actions';

const newSuggest = {
  author: 'Vasya',
  title: 'Suppa suggest',
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, dolores.',
  rating: 0,
  date: +new Date()
}

const getLastId = (arrayList) => {
  let minID = 0;

  arrayList.forEach(elem => {
    if (elem.id > minID) {
      minID = elem.id;
    }
  });

  return minID;
}

const getNextValue = (currentID) => {
  return currentID + 1;
}

describe('App tests', () => {
  it('Action.ADD_NEW_SUGGEST: Should be correct default', () => {
    let state = init();
    let currentID = getLastId(state.list);
    let nextID = getNextValue(currentID);

    expect(addNewSuggest()).to.be.deep.equal({
      type: ADD_NEW_SUGGEST,
      payload: { 
        id: nextID, 
        ...defaultSuggestData 
      }
    })
  });


  it('Action.ADD_NEW_SUGGEST: Should be correct new added action', () => {
    let state = init([{id: 33, ...newSuggest}]);
    let lastID = getLastId(state.list);
    let nextID = getNextValue(lastID);

    expect(addNewSuggest(lastID, newSuggest)).to.be.deep.equal({
      type: ADD_NEW_SUGGEST,
      payload: {
        id: nextID,
        ...newSuggest
      }
    })
  });


  it('Updater: Should be added new suggest', () => {
    let state = init([{id: 33, ...newSuggest}]);
    let lastID = getLastId(state.list);
    let nextID = getNextValue(lastID);

    expect(updater(state, addNewSuggest(lastID, newSuggest))).to.be.deep.equal({
      ...state, 
      list: [
        ...state.list, {
          id: nextID, 
          ...newSuggest
        } 
      ]
    });
  });


  it('Updater: Should be deleted suggest', () => {
    let state = init([{id: 33, ...newSuggest}, {id: 12, ...newSuggest}, {id: 34, ...newSuggest}]);

    expect(updater(state, deleteSuggest(33))).to.be.deep.equal({
      ...state,
      list: [{
        id: 12,
        ...newSuggest
      }, {
        id: 34,
         ...newSuggest
      }
    ]});
  });
  
});
