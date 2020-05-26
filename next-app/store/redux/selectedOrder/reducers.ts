import { SELECTED_ORDER_ACTIONS, SelectedOrderState } from './types';
import { selectedOrderAction } from './actions';

const initialState = {
  selectedOrder: [],
};

const selectedOrderReducer = (state = initialState,
  action: selectedOrderAction): SelectedOrderState => {
  switch (action.type) {
    case SELECTED_ORDER_ACTIONS.UPDATE:
      return {
        ...state, selectedOrder:
          action.columns ? action.columns : [],
      };
    default:
      return { ...state };
  }
};

export default selectedOrderReducer;
