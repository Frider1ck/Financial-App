import {createStore, combineReducers , applyMiddleware} from 'redux'
//import thunk from 'redux-thunk'
import { PanelReduser } from './PanelReduser';
import { diogramReducer } from './diogramReducer';
 import { barReducer } from './barReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
const rootReducer = combineReducers({
    PanelReduser,
    diogramReducer,
    barReducer
})
//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//composeEnhancers(applyMiddleware(thunk))

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;







