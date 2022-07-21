import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusAireComponent } from './status-aire.component';

describe('StatusAireComponent', () => {
  let component: StatusAireComponent;
  let fixture: ComponentFixture<StatusAireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusAireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusAireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
