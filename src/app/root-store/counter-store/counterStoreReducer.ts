import {initialState, State} from "./counterStoreState";
import {Action} from '@ngrx/store';
import {COUNTER_DECREMENT, COUNTER_GET, COUNTER_INCREMENT, COUNTER_RESET} from "./counterStoreActions";


export function CounterStoreReducer(state = initialState, action: Action): State {
  switch (action.type) {
    case COUNTER_INCREMENT :
      return state + 1,
    case COUNTER_DECREMENT :
      return state - 1,
    case COUNTER_RESET :
      return 0,
    case COUNTER_GET :
      return state,
    default :
      return state;


  }
}
