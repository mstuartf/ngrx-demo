import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecreaseButtonComponent } from './decrease-button.component';

describe('DecreaseButtonComponent', () => {
  let component: DecreaseButtonComponent;
  let fixture: ComponentFixture<DecreaseButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecreaseButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecreaseButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
