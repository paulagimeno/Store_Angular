import { AuthService } from './auth/auth.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  username = '';
  constructor(public authService: AuthService) {}
  ngOnInit(): void {
    console.log(this.username)
    this.authService.currentUserName.subscribe(currentUserName => this.username = currentUserName);
  }
}

