import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DbService } from 'src/app/shared/services/db.service';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: any
  empData: any

  constructor(private route: ActivatedRoute, private service: GlobalService, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((para) => {
      this.id = para.get('id')
      this.service.getRecord("Employees",this.id).subscribe((res) => {
        this.empData = {...res}    // Doing this will store the data in object format
      })
    })
  }

  putData(val:any){

    const emp = {
      id: this.id,
      name: val.fname,
      post: val.post,
      salary: val.salary,
      address: val.address
    }

    this.service.updateRecord("Employees",emp).subscribe(()=>{
      alert("Record Updated")
      this.router.navigate(['/crud'])
    })

  }

}
