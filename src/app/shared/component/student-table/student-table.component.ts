import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Istudent } from '../../models/student';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetconfirmComponent } from '../getconfirm/getconfirm.component';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss']
})
export class StudentTableComponent implements OnInit {
@Input()stdArr!:Array<Istudent>
@Output() emitRemove:EventEmitter<string>=new EventEmitter<string>();

@Output() EmitEdit:EventEmitter<Istudent>=new EventEmitter();
  constructor(private _matdialog:MatDialog) { }

  ngOnInit(): void {
  }

  trackbyFun(index:number,student:Istudent){
    return student.stdid;
  }

  onRemove(id:string){
    let config=new MatDialogConfig();
    config.width='450px';
    config.disableClose=true;
    config.data='Are you sure? you want to Remove it!!!'
    let confirm=this._matdialog.open(GetconfirmComponent,config);
    confirm.afterClosed().subscribe({
      next:data=>{
        if(data){
          this.emitRemove.emit(id);
        }
      }
    })
   
  }

  OnEdit(student:Istudent){
    this.EmitEdit.emit(student);
  }
}
