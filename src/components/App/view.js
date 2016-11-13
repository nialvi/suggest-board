import React from 'react';
import { view } from 'redux-elm';

import { add } from './actions';

import SuggestPreview from '../SuggestPreview/view';

export default view(({ model, dispatch }) => (
    <div>
        <div>List</div>

        {model.list.map((suggest, index) => 
            <SuggestPreview
                key={index} 
                dispatch={dispatch} 
                suggest={suggest} 
            />
        )}
    </div>
));
