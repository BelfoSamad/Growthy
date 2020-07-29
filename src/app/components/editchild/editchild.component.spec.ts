import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditchildComponent } from './editchild.component';

describe('EditchildComponent', () => {
  let component: EditchildComponent;
  let fixture: ComponentFixture<EditchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
