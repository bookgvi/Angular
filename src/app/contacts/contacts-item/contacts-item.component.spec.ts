import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsItemComponent } from './contacts-item.component';

describe('ContactsItemComponent', () => {
  let component: ContactsItemComponent;
  let fixture: ComponentFixture<ContactsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
