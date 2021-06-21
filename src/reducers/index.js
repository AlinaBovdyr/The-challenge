import { combineReducers } from 'redux';
import { items } from './items';
import { isLoading } from './loading';
import { error } from './error';

export default combineReducers({
  items,
  isLoading,
  error
});
