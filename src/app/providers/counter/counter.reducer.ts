import { Action } from '@ngrx/store';

import { Counter } from './counter.interface';
import * as CounterActions from './counter.actions';

const initalCounter: Counter = {value: 0, loading: false};

export function counterReducer (state: Counter = initalCounter, action: CounterActions.Actions) {

	console.log(action);

	switch (action.type) {
		
		case CounterActions.INCREASE:
			return { ...state, value: state.value + 1 };

		case CounterActions.DECREASE:
			return { ...state, value: state.value - 1 };

		case CounterActions.RANDOMISE_REQUEST:
			return { ...state, loading: true };

		case CounterActions.RANDOMISE_SUCCESS:
			return { value: action.payload, loading: false };

		case CounterActions.RESET:
			return { ...state, value: 0 };

		default:
			return state;

	}
}
