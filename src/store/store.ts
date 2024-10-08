import { createStore } from 'redux';
import reducer from './reducer';
import { InitialUsers } from './reducer';

const store = createStore(reducer, InitialUsers, (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__());

export {store}