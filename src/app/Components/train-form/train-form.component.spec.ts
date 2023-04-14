import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainFormComponent } from './train-form.component';

describe('TrainFormComponent', () => {
  let component: TrainFormComponent;
  let fixture: ComponentFixture<TrainFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
