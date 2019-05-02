import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { StoreModule} from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';

import { counterReducer } from './providers/counter/counter.reducer';
import { CounterEffects } from './providers/counter/counter.effects';
import { CounterService } from './providers/counter/counter.service';

import { IncreaseButtonComponent } from './components/increase-button/increase-button.component';
import { DecreaseButtonComponent } from './components/decrease-button/decrease-button.component';
import { ResetButtonComponent } from './components/reset-button/reset-button.component';
import { RandomiseButtonComponent } from './components/randomise-button/randomise-button.component';


@NgModule({
  declarations: [
    AppComponent,
    IncreaseButtonComponent,
    DecreaseButtonComponent,
    ResetButtonComponent,
    RandomiseButtonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({counter: counterReducer}),
    EffectsModule.forRoot([CounterEffects])
  ],
  providers: [CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
