import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

import { SignUpComponent } from './sign-up.component';
import { SignUpService } from 'src/app/service/sign-up.service';

fdescribe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;
  let signUpService: SignUpService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, RouterTestingModule, HttpClientTestingModule],
      declarations: [SignUpComponent],
      providers: [SignUpService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    signUpService = TestBed.inject(SignUpService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call signUpService.signUp() on form submission', () => {
    spyOn(signUpService, 'signUp').and.returnValue(of({}));
    const navigateSpy = spyOn((<any>component).route, 'navigate');

    const username = 'testUser';
    const password = 'testPassword';

    // Set form values
    component.postForm.controls['username'].setValue(username);
    component.postForm.controls['password'].setValue(password);

    // Trigger form submission
    component.onSubmit();

    expect(signUpService.signUp).toHaveBeenCalledWith(username, password);
    expect(navigateSpy).toHaveBeenCalledWith(['/login']);
  });

  // Add more test cases as needed
});
