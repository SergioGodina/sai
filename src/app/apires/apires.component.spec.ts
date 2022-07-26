import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiresComponent } from './apires.component';

describe('ApiresComponent', () => {
  let component: ApiresComponent;
  let fixture: ComponentFixture<ApiresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
