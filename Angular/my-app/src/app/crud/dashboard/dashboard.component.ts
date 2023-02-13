import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/shared/services/db.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private dbService: DbService) {}

  empData: any

  ngOnInit(): void {
    this.dbService.getRecords().subscribe((res) =>
      // console.log(res)
      this.empData = res
    )
  }
}
