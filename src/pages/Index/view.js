import React from 'react';
import { view } from 'redux-elm';
import style from './style.less';
import CSSModules from 'react-css-modules';

import { Link } from 'react-router';

const IndexPage = view(({ model, dispatch }) => (
    <div styleName="wrapper">
        <h1>Index page</h1>

        <Link to="/board" >board</Link>
    </div>
));

export default CSSModules(IndexPage, style);