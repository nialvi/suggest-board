// 'use strict';

// import { expect } from 'chai';

// import updater, { init } from './updater';
// import { add } from './actions';

// describe('TMP', () => {
//     it('Should be correct action', () => {
//         expect(add(12)).to.be.deep.equal({type: 'ADD', payload: 12});
//     });

//     it('Should be correct initial state', () => {
//         expect(updater()).to.be.deep.equal(init());
//     });

//     it('Should be added new value', () => {
//         const state = init();

//         expect(updater(state, add(12))).to.be.deep.equal({...state, count: state.count + 12});
//         expect(updater(state, add(-12))).to.be.deep.equal({...state, count: state.count + (-12)});
//     });

//     it('should be true', () => {
//         expect(true).to.be.true;
//     });
// });
