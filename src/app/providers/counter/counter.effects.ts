import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects'
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

import { CounterService } from './counter.service';
import * as CounterActions from './counter.actions';
import { Counter, RandomBody } from './counter.interface';


@Injectable()
export class CounterEffects {

	constructor(public actions$: Actions, public counterService: CounterService) {}

	@Effect()
	private getRandomCount$ = this.actions$.pipe(

		ofType(CounterActions.RANDOMISE_REQUEST),

		switchMap((action: CounterActions.RandomiseCounterRequest) => 

			this.counterService.getRandomCount().pipe(

				map(
					(resp: RandomBody) => new CounterActions.RandomiseCounterSuccess(resp.number)
				),

				// need to catch the error or the stream will end
				catchError(
					(err: HttpErrorResponse) => of(new CounterActions.RandomiseCounterFailure(err))
				)

			)

		)

	)

}
