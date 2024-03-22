import { Component, OnInit } from '@angular/core';
import { AuthFirebaseService } from '../service/auth-firebase.service';
import { Router } from '@angular/router';
import { User } from '../interface/user';
import { MenuService } from '../service/menu.service';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  user: User = new User();
  formRegister : any;

  constructor(private menuService: MenuService,
    private router: Router,
    private autSvc: AuthFirebaseService,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit() {
    this.buildForm();
  }

  async onRegister(){
    this.autSvc.onRegister(this.user).then(user=>{
      if(user){
        console.log('Successfully created user!');
        this.menuService.setTitle("presupuesto");
        this.router.navigate(['/presupuesto']);
      }
    }).catch(error=>{
      console.log('Error al crear usuario!');
    })

  } 
  onLogin(){
    this.menuService.setTitle("login");
    this.router.navigate(["/login"]);
  }

  buildForm(){
    this.formRegister = this.formBuilder.group({
      email: new FormControl('',{validators: [Validators.email,Validators.required]}),
      password: new FormControl('', {validators: [Validators.required, Validators.minLength(6), Validators.maxLength(6)]})
    });
  }

  submitForm(){
    if(this.formRegister.valid){
      this.user.email = this.formRegister.get('email').value;
      this.user.password = this.formRegister.get('password').value;
      this.onRegister();
    }
  }

  ionViewWillEnter(){
    this.formRegister.reset();
  }

  hasError: any = (controlName: string, errorName: string) => {
		return !this.formRegister.controls[controlName].valid &&
			this.formRegister.controls[controlName].hasError(errorName) &&
			this.formRegister.controls[controlName].touched;
	}

}
