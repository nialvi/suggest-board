import React from 'react';
import { view } from 'redux-elm';
import CSSModules from 'react-css-modules';
import styles from './styles.less';

const BoardCard = view(({ model, dispatch }) => (
    <div styleName="wrapper">
        <img styleName="image" src="https://unsplash.it/300/400/?random" alt="board card background"/>

        <div styleName="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, saepe?
        </div>
    </div>
));

export default CSSModules(BoardCard, styles);