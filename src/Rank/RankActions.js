
export const RANK_START = 2000;
export const RANK_LIST_RECEIVED = 2001;
export const RANK_CHOOSES_LEFT = 2101;
export const RANK_CHOOSES_RIGHT = 2102;
export const RANK_CHOOSES_DRAWS = 2103;


export function rankStart() {
  return (dispatch, getState) => {
    const { list } = getState();
    dispatch(rankListReceived(list.list));
  };
}

export function rankListReceived(list) {
  return { type: RANK_LIST_RECEIVED, list };
}

export function rankChoosesLeft() {
  return { type: RANK_CHOOSES_LEFT };
}

export function rankChoosesRight() {
  return { type: RANK_CHOOSES_RIGHT };
}

export function rankChoosesDraw() {
  return { type: RANK_CHOOSES_DRAWS };
}
