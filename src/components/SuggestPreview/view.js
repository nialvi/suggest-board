import React from 'react';
import { view } from 'redux-elm';

import { voteSuggest, TYPE } from './actions';

export default view(({ model, dispatch, suggest }) => (
    <div>
        <div>
            <button onClick={() => { dispatch(voteSuggest(TYPE.POSITIVE)) }}>+</button>
            <button onClick={() => { dispatch(voteSuggest(TYPE.NEGATIE)) }} >-</button>
            
            <h2>{suggest.rating} - {suggest.title}</h2>
            <div>{suggest.text}</div>
            <hr />
        </div>
    </div>
));
