import uuid from '../utils/uuid';
import {
  LIST_CREATE,
  LIST_REQUEST,
  LIST_RECEIVED,
  LIST_ADD_ITEM,
  LIST_DEL_ITEM,
} from './ListActions';


export default function ListReducer(state = { isFetching: true, list: [] }, action) {
  let newState;

  switch (action.type) {
    case LIST_CREATE:
      return Object.assign({}, state, {
        list: [newItem()]
      });

    case LIST_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });

    case LIST_RECEIVED:
      return Object.assign({}, state, {
        isFetching: false,
        list: action.list
      });

    case LIST_ADD_ITEM:
      return Object.assign({}, state, {
        list: [...state.list, newItem()]
      });

    case LIST_DEL_ITEM:
      newState = Object.assign({}, state, {
        list: state.list.filter(item => item !== action.item)
      });

      if (!newState.list.length) {
        newState.list.push(newItem());
      }

      return newState;

    default:
      return state;
  }
}


function newItem() {
  return { id: uuid(), value: '' };
}
