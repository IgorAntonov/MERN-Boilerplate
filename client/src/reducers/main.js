// action types
const CLICK_BTN = 'CLICK_BTN';

// action creators
export const clickBtn = () => ({
  type: CLICK_BTN
});

// reducer
export default (state = 5, action) => {
  switch (action.type) {
    case CLICK_BTN:
      return state - 1;
    default:
      return state;
  }
};

// selectors
export const getCount = state => state.main;
