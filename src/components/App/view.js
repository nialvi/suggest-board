import React from 'react';
import { view } from 'redux-elm';

import { add } from './actions';

export default view(({ model, dispatch }) => (
    <div>
        <h1>{model.title}</h1>
        <div>{model.count}</div>
        <button onClick={()=> {dispatch(add(1))}} >+1</button>
    </div>
));
