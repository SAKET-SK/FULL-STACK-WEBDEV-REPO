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
  term: any

  p: any = 1;
  count: any = 5;

  ngOnInit(): void {
    this.dbService.getRecords().subscribe((res) =>
      // console.log(res)
      this.empData = res
    )
  }

  delete(id:any){
    this.dbService.deleteRecord(id).subscribe(() => (
      alert("Record Deleted Successfully")
    ))
  }
}
