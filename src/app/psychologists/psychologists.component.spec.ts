import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsychologistsComponent } from './psychologists.component';

describe('PsychologistsComponent', () => {
  let component: PsychologistsComponent;
  let fixture: ComponentFixture<PsychologistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsychologistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsychologistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
