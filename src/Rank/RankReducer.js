import {
  RANK_LIST_RECEIVED,
  RANK_CHOOSES_LEFT,
  RANK_CHOOSES_RIGHT,
  RANK_CHOOSES_DRAWS
} from './RankActions';


export default function RankReducer(state = {}, action) {
  switch (action.type) {
    case RANK_LIST_RECEIVED:
      return Object.assign({}, state, {
        list: action.list
      });

    case RANK_CHOOSES_LEFT:
      return Object.assign({}, state, {
        list: []
      });

    case RANK_CHOOSES_RIGHT:
      return Object.assign({}, state, {
        list: []
      });


    case RANK_CHOOSES_DRAWS:
      return Object.assign({}, state, {
        list: []
      });

    default:
      return state;
  }
}
