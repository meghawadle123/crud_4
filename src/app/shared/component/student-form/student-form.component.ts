import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Istudent } from '../../models/student';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit ,OnChanges{
@ViewChild('stdForm')stdForm!:NgForm;

@Output() EmitAdd:EventEmitter<Istudent>=new EventEmitter<Istudent>();
@Output() EmitUpdate:EventEmitter<Istudent>=new EventEmitter<Istudent>();

@Input()editObj!:Istudent;
IsInEditMode:boolean=false;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['editObj'].currentValue){
      this.IsInEditMode=true;
      this.stdForm.form.patchValue(this.editObj);

    }
  }

  ngOnInit(): void {
  }

  onAddStudent(){
    if(this.stdForm.valid){
      let newObj:Istudent={
        ...this.stdForm.value,
        stdid:Date.now().toString()
      }
      this.stdForm.reset();
      this.EmitAdd.emit(newObj);
    }
  }

  onUpdate(){
    if(this.stdForm.valid){
      let updated_obj:Istudent={
        ...this.stdForm.value,
        stdid:this.editObj.stdid
      }
      this.stdForm.reset();
      this.IsInEditMode=false;
      this.EmitUpdate.emit(updated_obj);
    }
  }
}
