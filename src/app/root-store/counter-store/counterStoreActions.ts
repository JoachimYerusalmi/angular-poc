import {Action} from '@ngrx/store';
import {Counter} from "../../models/Counter";

export const COUNTER_GET = '[Counter] Get';
export const COUNTER_RESET = '[Counter] Reset';
export const COUNTER_INCREMENT = '[Counter] Increment';
export const COUNTER_DECREMENT = '[Counter] Decrement';


export class resetCounterAction implements Action {
  readonly type = COUNTER_RESET;

  constructor(public payload: Counter)
}


export class GetCounterAction implements Action {
  readonly type = COUNTER_GET;

  constructor(public payload: Counter)
}


export class IncrementCounterAction implements Action {
  readonly type = COUNTER_INCREMENT;

  constructor(public payload: Counter)

}

export class DecrementCounterAction implements Action {
  readonly type = COUNTER_DECREMENT;

  constructor(public payload: Counter)
}


export type Action = GetCounterAction | IncrementCounterAction | DecrementCounterAction;
