import React from 'react';
import { view } from 'redux-elm';

export default view(({ model, dispatch, suggest }) => (
    <div>
        <div>
            <button>+</button>
            <button>-</button>
            <h2>{suggest.rating} - {suggest.title}</h2>
            <div>{suggest.text}</div>
            <hr />
        </div>
    </div>
));
