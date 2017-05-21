'use strict';

export default uuid;


const UUID = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
const regex = /[xy]/g;


function uuid() {
  return UUID.replace(regex, randomChar);
}


function randomChar(c) {
  /* eslint-disable no-bitwise, no-mixed-operators */
  const r = Math.random() * 16 | 0;
  const v = c === 'x' ? r : (r & 0x3 | 0x8);
  return v.toString(16);
}
