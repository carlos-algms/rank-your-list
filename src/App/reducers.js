import { combineReducers } from 'redux';

import list from '../List/ListReducer';
import rank from '../Rank/RankReducer';

export default combineReducers({
  list,
  rank
});
