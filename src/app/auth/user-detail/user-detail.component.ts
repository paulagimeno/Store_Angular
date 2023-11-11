import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../auth.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent {

  user: User | undefined; 

  constructor(private authService: AuthService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      // const id = parseInt(params['id'],10);
      const id = localStorage.getItem('user_id')
      if (id !== null){
    this.authService.findById(parseInt(id, 10)).subscribe(data => this.user = data);
    }
  });
    };
  }


