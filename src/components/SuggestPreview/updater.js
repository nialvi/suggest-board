import { Updater } from 'redux-elm';
import { VOTE_SUGGEST, TYPE } from './actions';

export const init = () => ({
    id: 1,
    author: 'Vasya',
    title: 'Suppa suggest',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, dolores.',
    rating: 0,
    voted: null,
    date: +new Date()
});

const voting = (model, voted) => {
    if (model.voted !== voted) {
        const rating = voted === TYPE.POSITIVE ? model.rating + 1 : model.rating - 1; 

        if (model.voted === null) {
            return {
                rating,
                voted
            };
        } else {
            return {
                rating,
                voted: null
            }
        };
    } else {
        return {
            rating: model.rating,
            voted: model.voted
        };
    }
}

export default new Updater(init())
    .case(VOTE_SUGGEST, (model, { payload }) => {
        const { rating, voted } = voting(model, payload);

        return { 
            ...model,
            rating,
            voted  
        };
    })
    .toReducer();
