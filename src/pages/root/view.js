import { view } from 'redux-elm';
import buildRouting from './routing';

import 'normalize.css';

export default view(({ history }) => buildRouting(history));