import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OroductAddComponent } from './oroduct-add.component';

describe('OroductAddComponent', () => {
  let component: OroductAddComponent;
  let fixture: ComponentFixture<OroductAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OroductAddComponent]
    });
    fixture = TestBed.createComponent(OroductAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
