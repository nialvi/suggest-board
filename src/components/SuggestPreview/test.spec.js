'use strict';

import { expect } from 'chai';

import updater, { init } from './updater';
import { 
    voteSuggest,
    VOTE_SUGGEST,
    TYPE
} from './actions';

describe('SuggestPrivew Test', () => {
    it('Should be correct action', () => {
        expect(voteSuggest(TYPE.POSITIVE)).to.be.deep.equal({type: VOTE_SUGGEST, payload: TYPE.POSITIVE});
        expect(voteSuggest(TYPE.NEGATIVE)).to.be.deep.equal({type: VOTE_SUGGEST, payload: TYPE.NEGATIVE});
    });


    it('Updater: Должен проставиться положительной голос. Прогосовали первый раз положительно', () => {
        let state = init();

        expect(updater(state, voteSuggest(TYPE.POSITIVE))).to.be.deep.equal({...state, voted: TYPE.POSITIVE, rating: state.rating + 1});
    });


    it('Updater: Ничего не должно измениться. Прогосовали второй раз положительно', () => {
        let state = init();
        state.rating += 1;
        state.voted = TYPE.POSITIVE;

        expect(updater(state, voteSuggest(TYPE.POSITIVE))).to.be.deep.equal({...state, voted: TYPE.POSITIVE, rating: state.rating });
    });


    it('Updater: Должен сброситься голос. Был положительный голос, после проголосовали отрицательно', () => {
        let state = init();
        state.rating += 1;
        state.voted = TYPE.POSITIVE;

        expect(updater(state, voteSuggest(TYPE.NEGATIVE))).to.be.deep.equal({...state, voted: null, rating: state.rating - 1 });
    });


    it('Updater: Должен проставиться негативный голос. Прогосовали первый раз негативно', () => {
        let state = init();

        expect(updater(state, voteSuggest(TYPE.NEGATIVE))).to.be.deep.equal({...state, voted: TYPE.NEGATIVE, rating: state.rating - 1});
    });

    
    it('Updater: Ничего не должно измениться. Прогосовали второй раз негативно', () => {
        let state = init();
        state.rating -= 1;
        state.voted = TYPE.NEGATIVE;

        expect(updater(state, voteSuggest(TYPE.NEGATIVE))).to.be.deep.equal({...state, voted: TYPE.NEGATIVE, rating: state.rating });
    });

    
    it('Updater: Должен сброситься голос. Был негативный голос, после проголосовали положительно', () => {
        let state = init();
        state.rating -= 1;
        state.voted = TYPE.NEGATIVE;

        expect(updater(state, voteSuggest(TYPE.POSITIVE))).to.be.deep.equal({...state, voted: null, rating: state.rating + 1 });
    });
});
