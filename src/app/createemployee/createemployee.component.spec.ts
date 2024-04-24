import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateemployeeComponent } from './createemployee.component';

describe('CreateemployeeComponent', () => {
  let component: CreateemployeeComponent;
  let fixture: ComponentFixture<CreateemployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateemployeeComponent]
    });
    fixture = TestBed.createComponent(CreateemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
