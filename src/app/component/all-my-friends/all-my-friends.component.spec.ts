import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMyFriendsComponent } from './all-my-friends.component';

describe('AllMyFriendsComponent', () => {
  let component: AllMyFriendsComponent;
  let fixture: ComponentFixture<AllMyFriendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllMyFriendsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllMyFriendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
