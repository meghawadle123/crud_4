import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Itodo } from '../../models/todo';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit,OnChanges {
IsInEditMode:boolean=false;
@ViewChild('todoForm')todoForm!:NgForm

@Output() EmitAdd:EventEmitter<Itodo>=new EventEmitter<Itodo>();
@Output() EmitUpdate:EventEmitter<Itodo>=new EventEmitter<Itodo>();
@Input() editObj!:Itodo
  constructor(private _matsnackbar:ServiceService) { }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['editObj'].currentValue){
      this.IsInEditMode=true;
      this.todoForm.form.patchValue(this.editObj);
    }
  }

  ngOnInit(): void {

  }

  onAddTodo(){
    if(this.todoForm.valid){
      let newObj:Itodo={
        ...this.todoForm.value,
        id:Date.now().toString()
      }
    this.EmitAdd.emit(newObj);
    this.todoForm.reset();
    this._matsnackbar.openSnackbar('the TodoItem is Added Succesfully');
    }
  }

  onUpdate(){
    if(this.todoForm.valid){
      let updated_obj:Itodo={
        ...this.todoForm.value,
        id:this.editObj.id
      }
      this.IsInEditMode=false
      this.todoForm.reset();
      this.EmitUpdate.emit(updated_obj);

    }
  }
}
