import React from 'react';
import { view } from 'redux-elm';

import style from './style.less';
import CSSModules from 'react-css-modules';

import { Link } from 'react-router';
import Header from '../../components/Header/view';
import Footer from '../../components/Footer/view';
import BoardCard from '../../components/BoardCard/view';

const IndexPage = view(({ model, dispatch }) => (
    <div>
        <Header dispatch={dispatch} />
        
        <div styleName="wrapper">
            <h1>Choose your board</h1>

            <div styleName="wrapper-boards">
                {[1, 2, 3].map(item => (
                    <Link to="/board" >
                        <BoardCard dispatch={dispatch} />
                    </Link>
                ))}
            </div>
        </div>

        <Footer dispatch={dispatch} />
    </div>
));

export default CSSModules(IndexPage, style);