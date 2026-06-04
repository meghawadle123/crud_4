import { Component, OnInit } from '@angular/core';
import { Istudent } from '../../models/student';
import { StudentData } from '../../consts/student';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss']
})
export class StudentDashboardComponent implements OnInit {
stdArr:Array<Istudent>=[];

editObj!:Istudent

  constructor(private _matsnackbar:ServiceService) { }

  ngOnInit(): void {
    this.stdArr=StudentData;
  }

  onAddstd(student:Istudent){
  this.stdArr.push(student);
  this._matsnackbar.openSnackbar('the student data is added succesfully');
  }

  onRemove(id:string){
    let getindex=this.stdArr.findIndex(t=>t.stdid===id);
    this.stdArr.splice(getindex,1);
    this._matsnackbar.openSnackbar('the student is removed Succesfully')
  }

  onEdit(student:Istudent){
    this.editObj=student;
  }

  onUpdate(student:Istudent){
    let getindex=this.stdArr.findIndex(t=>t.stdid===student.stdid);
    this.stdArr[getindex]=student;
    this._matsnackbar.openSnackbar('The student is updated Succesfully');
  }
}
