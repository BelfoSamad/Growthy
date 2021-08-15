import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JuniorLoginComponent } from './junior-login.component';

describe('JuniorLoginComponent', () => {
  let component: JuniorLoginComponent;
  let fixture: ComponentFixture<JuniorLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuniorLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuniorLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
