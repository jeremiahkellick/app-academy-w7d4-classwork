import {combineReducers} from 'redux';
import entitiesReducers from './entities_reducer';
import uiReducer from './ui_reducer';

const rootReducer = combineReducers({
  entities: entitiesReducers,
  ui: uiReducer
});

export default rootReducer;
