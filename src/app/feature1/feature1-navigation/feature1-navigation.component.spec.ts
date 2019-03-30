import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature1NavigationComponent } from './feature1-navigation.component';

describe('Feature1NavigationComponent', () => {
  let component: Feature1NavigationComponent;
  let fixture: ComponentFixture<Feature1NavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature1NavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature1NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
