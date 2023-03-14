import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  username: any;
  password: any;

  userData: any;

  constructor(private service: GlobalService, private router: Router) {}

  ngOnInit(): void {
    // this.service.getRecords("Users").subscribe((res) => {
    //   console.log(res)
    // })
  }

  login(){
    // console.log(this.username + " - " + this.password)
    this.service.getRecords("Users").subscribe((res) => {
      this.userData = res;

      const data = this.userData.filter((item:any) => {
        return item.username == this.username && item.password == this.password
      })

      if(data.length > 0){
        this.service.login(this.username);
        this.router.navigate(['/crud']);
      }
      else{
        alert("Username or Password is incorrect");
        this.username = "";
        this.password = "";
      }
    })
  }

}
