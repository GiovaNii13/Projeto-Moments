import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnemomentComponent } from './onemoment.component';

describe('OnemomentComponent', () => {
  let component: OnemomentComponent;
  let fixture: ComponentFixture<OnemomentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnemomentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnemomentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
