import React from 'react';
import { view } from 'redux-elm';
import styles from './styles.less';
import CSSModules from 'react-css-modules';

const Footer = view(({ model, dispatch }) => (
    <footer styleName="wrapper">
        <span styleName="name">
            Footer
        </span>
    </footer>
));

export default CSSModules(Footer, styles);
