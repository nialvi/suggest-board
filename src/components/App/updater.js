import { Updater } from 'redux-elm';
import { ADD } from './actions';

export const init = () => ({
    title: 'Hello world',
    count: 0
});

export default new Updater(init())
    .case(ADD, (model, action) => ({...model, count: model.count + action.payload}))
    .toReducer();
