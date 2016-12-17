// import 'babel-polyfill';

import run from './bootstrap';
import view from './pages/root/view';
import updater from './pages/root/updater';

run('app', view, updater);