import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetpasswordFormComponent } from './forgetpassword-form.component';

describe('ForgetpasswordFormComponent', () => {
  let component: ForgetpasswordFormComponent;
  let fixture: ComponentFixture<ForgetpasswordFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgetpasswordFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgetpasswordFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
