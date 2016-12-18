import React from 'react';
import { view, forwardTo } from 'redux-elm';
import CSSModules from 'react-css-modules';
import styles from './styles.less';

import { add } from './actions';

import Header from '../../components/Header/view';
import Footer from '../../components/Footer/view';

import SuggestPreview from '../../components/SuggestPreview/view';


const Board = view(({ model, dispatch }) => (
    <div>
        <Header dispatch={dispatch} />
        
        <section styleName="wrapper">
            {model.list.map((suggest, index) => 
                <SuggestPreview
                    key={index} 
                    dispatch={forwardTo(dispatch, 'SuggestPreview', index)} 
                    suggest={suggest} 
                />
            )}
        </section>

        <Footer dispatch={dispatch} />
    </div>
));

export default CSSModules(Board, styles);
