import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { AppState } from '../../app.state';

import * as CounterActions from '../../providers/counter/counter.actions';
import { Counter } from '../../providers/counter/counter.interface';

@Component({
  selector: 'app-decrease-button',
  templateUrl: './decrease-button.component.html',
  styleUrls: ['./decrease-button.component.less']
})
export class DecreaseButtonComponent implements OnInit, OnDestroy {

	private unsubscribe = new Subject();
	public counter: Counter;

  constructor(private store: Store<AppState>) {}

  public ngOnInit() {
  	this.store.select('counter').pipe(takeUntil(this.unsubscribe)).subscribe((counter: Counter) => {
			this.counter = { ...counter };
		})
  }

  public decreaseCounter() {
  	this.store.dispatch(new CounterActions.DecreaseCounter())
  }

  public ngOnDestroy() {
		this.unsubscribe.next();
    this.unsubscribe.complete();
	}

}
