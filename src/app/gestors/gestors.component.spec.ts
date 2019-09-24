import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestorsComponent } from './gestors.component';

describe('GestorsComponent', () => {
  let component: GestorsComponent;
  let fixture: ComponentFixture<GestorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
