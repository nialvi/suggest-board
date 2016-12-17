import { Updater } from 'redux-elm';
import initialState from './initialState';

import Index, { init as indexInit } from '../Index/updater';
import Board, { init as boardInit } from '../Board/updater';

import { initListSuggest } from '../Board/mock';

export const init = () => ({
  ...initialState,

  index: indexInit(),
  board: boardInit(initListSuggest),
});

export default new Updater(init())
  .case('Index', (model, action) => ({
    ...model,
    index: Index(model.index, action)
  }))

  .case('Board', (model, action) => ({
    ...model,
    board: Board(model.board, action)
  }))

  .toReducer();
