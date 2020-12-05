import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputNoteComponent } from './input-note.component';

describe('InputNoteComponent', () => {
  let component: InputNoteComponent;
  let fixture: ComponentFixture<InputNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
