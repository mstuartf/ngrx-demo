import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { AppState } from '../../app.state';

import * as CounterActions from '../../providers/counter/counter.actions';
import { Counter } from '../../providers/counter/counter.interface';

@Component({
  selector: 'app-reset-button',
  templateUrl: './reset-button.component.html',
  styleUrls: ['./reset-button.component.less']
})
export class ResetButtonComponent implements OnInit, OnDestroy {

	private unsubscribe = new Subject();
	public counter: Counter;

  constructor(private store: Store<AppState>) {}

  public ngOnInit() {
  	this.store.select('counter').pipe(takeUntil(this.unsubscribe)).subscribe((counter: Counter) => {
			this.counter = { ...counter };
		})
  }

  public resetCounter() {
  	this.store.dispatch(new CounterActions.ResetCounter())
  }

  public ngOnDestroy() {
		this.unsubscribe.next();
    this.unsubscribe.complete();
	}

}
