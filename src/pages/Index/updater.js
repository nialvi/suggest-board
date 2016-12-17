import { Updater } from 'redux-elm';
import { ADD } from './actions';

export const init = () => ({
    boards: [1,2,3]
});

export default new Updater(init())
    .toReducer();
