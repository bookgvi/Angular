import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeHooksComponent } from './life-hooks.component';

describe('LifeHooksComponent', () => {
  let component: LifeHooksComponent;
  let fixture: ComponentFixture<LifeHooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeHooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeHooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
