import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  user: User | undefined; 

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.findById(1).subscribe(data => this.user = data);
  }
}
