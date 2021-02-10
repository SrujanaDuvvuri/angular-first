import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentFourComponent } from './parent-four.component';

describe('ParentFourComponent', () => {
  let component: ParentFourComponent;
  let fixture: ComponentFixture<ParentFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
