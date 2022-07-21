import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualTempComponent } from './actual-temp.component';

describe('ActualTempComponent', () => {
  let component: ActualTempComponent;
  let fixture: ComponentFixture<ActualTempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualTempComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
