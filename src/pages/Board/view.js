import React from 'react';
import { view, forwardTo } from 'redux-elm';

import { add } from './actions';

import SuggestPreview from '../../components/SuggestPreview/view';

export default view(({ model, dispatch }) => (
    <div>
        <div>List</div>

        {model.list.map((suggest, index) => 
            <SuggestPreview
                key={index} 
                dispatch={forwardTo(dispatch, 'SuggestPreview', index)} 
                suggest={suggest} 
            />
        )}
    </div>
));
