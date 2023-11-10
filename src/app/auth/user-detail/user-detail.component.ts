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
      const id = parseInt(params['id'],10);
    this.authService.findById(id).subscribe(data => this.user = data);

  });

    };
  }


