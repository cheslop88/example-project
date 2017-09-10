import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableServiceComponent } from './observable-service.component';

describe('ObservableServiceComponent', () => {
  let component: ObservableServiceComponent;
  let fixture: ComponentFixture<ObservableServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservableServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
