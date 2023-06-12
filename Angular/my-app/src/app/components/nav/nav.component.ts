import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  
  constructor(private service: GlobalService, private router: Router) {}

  ngOnInit(): void {}

  logout(){
    if(confirm("Are you sure you want to logout 🥹 ?")){
      this.service.logout()
      this.router.navigate(['/'])
    }
    
  }

}
