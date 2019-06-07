
import {Counter} from 'src/app/models/Counter';

export interface State {
  counter: Counter | null;
  isLoading: boolean;
  error: string;
}



export const initialState: State =>(
  return {

    isLoading: false,
    error: null
  }
);
