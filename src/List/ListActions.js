
export const LIST_REQUEST = 1000;
export const LIST_RECEIVED = 1001;
export const LIST_CREATE = 1002;
export const LIST_CREATE_FAILED = 1003;
export const LIST_CREATED = 1004;

export const LIST_ADD_ITEM = 1100;
export const LIST_DEL_ITEM = 1101;

export function listRequest() {
  return { type: LIST_REQUEST };
}

export function listReceived(list) {
  return { type: LIST_RECEIVED, list };
}

export function listCreate() {
  return { type: LIST_CREATE };
}

export function listCreateFailed(error) {
  return { type: LIST_CREATE_FAILED, error };
}

export function listCreated(poll) {
  return { type: LIST_CREATED, poll };
}

export function listItemAdd() {
  return { type: LIST_ADD_ITEM };
}

export function listItemDelete(item) {
  return { type: LIST_DEL_ITEM, item };
}
