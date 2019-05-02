import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';

import { RandomBody } from './counter.interface';


@Injectable()
export class CounterService {

	constructor(public http: HttpClient) { }

	public getRandomCount(): Observable<RandomBody> {
		return this.http.get<RandomBody>('http://numbersapi.com/random/math?min=0&max=20&json').pipe(delay(2000));
	}

}
