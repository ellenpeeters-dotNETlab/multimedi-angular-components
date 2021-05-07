import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterIntervalComponent } from './counter-interval.component';

describe('CounterIntervalComponent', () => {
  let component: CounterIntervalComponent;
  let fixture: ComponentFixture<CounterIntervalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterIntervalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterIntervalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
