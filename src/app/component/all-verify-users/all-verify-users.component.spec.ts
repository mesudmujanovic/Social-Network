import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllVerifyUsersComponent } from './all-verify-users.component';

describe('AllVerifyUsersComponent', () => {
  let component: AllVerifyUsersComponent;
  let fixture: ComponentFixture<AllVerifyUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllVerifyUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllVerifyUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
