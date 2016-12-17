import React from 'react';
import { view } from 'redux-elm';

import { Link } from 'react-router';

export default view(({ model, dispatch }) => (
    <div>
        <h1>Index page</h1>

        <Link to="/board" >board</Link>
    </div>
));
