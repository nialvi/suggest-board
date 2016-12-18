import React from 'react';
import { view } from 'redux-elm';

import style from './style.less';
import CSSModules from 'react-css-modules';

import { Link } from 'react-router';
import Header from '../../components/Header/view';
import Footer from '../../components/Footer/view';

const IndexPage = view(({ model, dispatch }) => (
    <div>
        <Header dispatch={dispatch} />
        
        <div styleName="wrapper">
            <h1>Index page</h1>

            <Link to="/board" >board</Link>
        </div>

        <Footer dispatch={dispatch} />
    </div>
));

export default CSSModules(IndexPage, style);