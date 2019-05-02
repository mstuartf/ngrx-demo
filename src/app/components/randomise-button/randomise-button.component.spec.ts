import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomiseButtonComponent } from './randomise-button.component';

describe('RandomiseButtonComponent', () => {
  let component: RandomiseButtonComponent;
  let fixture: ComponentFixture<RandomiseButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomiseButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomiseButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
