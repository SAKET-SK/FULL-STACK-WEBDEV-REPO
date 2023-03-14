import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/shared/services/db.service';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private globalService: GlobalService) {}

  empData: any
  term: any

  p: any = 1;
  count: any = 5;

  ngOnInit(): void {
    this.globalService.getRecords("Employees").subscribe((res) =>
      // console.log(res)
      this.empData = res
    )
  }

  delete(id:any){
    this.globalService.deleteRecord("Employees",id).subscribe(() => (
      alert("Record Deleted Successfully")
    ))
  }
}
