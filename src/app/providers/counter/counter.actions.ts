import { HttpErrorResponse } from '@angular/common/http';
import { Action } from '@ngrx/store';

// SYNCHRONOUS ACTIONS ///////////////////////////////////////////////////////////

export const INCREASE = 'INCREASE'
export class IncreaseCounter implements Action {
	readonly type = INCREASE;
}

export const DECREASE = 'DECREASE'
export class DecreaseCounter implements Action {
	readonly type = DECREASE;
}

export const RESET = 'RESET'
export class ResetCounter implements Action {
	readonly type = RESET;
}

// ASYNCHRONOUS ACTIONS //////////////////////////////////////////////////////////

export const RANDOMISE_REQUEST = 'RANDOMISE_REQUEST'
export class RandomiseCounterRequest implements Action {
	readonly type = RANDOMISE_REQUEST;
}

export const RANDOMISE_SUCCESS = 'RANDOMISE_SUCCESS'
export class RandomiseCounterSuccess implements Action {
	readonly type = RANDOMISE_SUCCESS;
	constructor(public payload: number) {}
}

export const RANDOMISE_FAILURE = 'RANDOMISE_FAILURE'
export class RandomiseCounterFailure implements Action {
	readonly type = RANDOMISE_FAILURE;
	constructor(public payload: HttpErrorResponse) {}
}

export type Actions = IncreaseCounter | DecreaseCounter | ResetCounter | RandomiseCounterRequest | RandomiseCounterSuccess | RandomiseCounterFailure;
