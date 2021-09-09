import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route:Router, private userService:UserService) { }

  ngOnInit(): void {
  }

  next(){
    this.userService.username = 'Username'
    console.log('Next');
    this.route.navigate(['home']);
  }
}
