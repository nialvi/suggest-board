import React from 'react';
import { view } from 'redux-elm';
import styles from './styles.less';
import CSSModules from 'react-css-modules';

const Header = view(({ model, dispatch }) => (
    <header styleName="wrapper">
        <span styleName="name">
            Suggest Board
        </span>
    </header>
));

export default CSSModules(Header, styles);
