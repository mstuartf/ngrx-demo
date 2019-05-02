import { Counter } from './providers/counter/counter.interface';

export interface AppState {
	readonly counter: Counter;
}
