import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentFiveComponent } from './parent-five.component';

describe('ParentFiveComponent', () => {
  let component: ParentFiveComponent;
  let fixture: ComponentFixture<ParentFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentFiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
