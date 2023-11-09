import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../auth.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent {

  user: User | undefined; 

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.findById(1).subscribe(data => this.user = data);
  }
}
