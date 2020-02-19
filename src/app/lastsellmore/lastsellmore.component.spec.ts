import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastsellmoreComponent } from './lastsellmore.component';

describe('LastsellmoreComponent', () => {
  let component: LastsellmoreComponent;
  let fixture: ComponentFixture<LastsellmoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastsellmoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastsellmoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
