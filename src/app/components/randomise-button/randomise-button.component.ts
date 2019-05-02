import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { AppState } from '../../app.state';

import * as CounterActions from '../../providers/counter/counter.actions';
import { Counter } from '../../providers/counter/counter.interface';

@Component({
  selector: 'app-randomise-button',
  templateUrl: './randomise-button.component.html',
  styleUrls: ['./randomise-button.component.less']
})
export class RandomiseButtonComponent implements OnInit, OnDestroy {

	private unsubscribe = new Subject();
	public counter: Counter;

  constructor(private store: Store<AppState>) {}

  public ngOnInit() {
  	this.store.select('counter').pipe(takeUntil(this.unsubscribe)).subscribe((counter: Counter) => {
			this.counter = { ...counter };
		})
  }

  public randomiseCounter() {
  	this.store.dispatch(new CounterActions.RandomiseCounterRequest())
  }

  public ngOnDestroy() {
		this.unsubscribe.next();
    this.unsubscribe.complete();
	}

}
