import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  userForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private authService: AuthService,
    private router: Router
    ) {}

  save() {

    let login = {
      username: this.userForm.get('username')?.value ?? '',
      password: this.userForm.get('password')?.value ?? ''
    }

    this.authService.login(login).subscribe(data => {
      console.log(data.token);
     
      this.authService.handleLoginResponse(data.token);

      this.router.navigate(['/products']);
    });

  }

}
