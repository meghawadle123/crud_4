import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ipost } from '../../models/post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit,OnChanges {
IsInEditmode:boolean=false;
@ViewChild('postForm')postForm!:NgForm;

@Output() EmitAddPost:EventEmitter<Ipost>=new EventEmitter();
@Output() EmitUpdate:EventEmitter<Ipost>=new EventEmitter();

@Input() EditObj!:Ipost
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['EditObj'].currentValue){
      this.IsInEditmode=true;
      this.postForm.form.patchValue(this.EditObj)
    }
  }

  ngOnInit(): void {

  }

  onpostAdd(){
    if(this.postForm.valid){
    let newObj:Ipost={
       ...this.postForm.value,
       id:Date.now().toString()
    }
    this.postForm.reset();
    this.EmitAddPost.emit(newObj);
  }

  }

 onUpdate(){
  if(this.postForm.valid){
  let updated_Obj:Ipost={
    ...this.postForm.value,
    id:this.EditObj.id
  }
  this.postForm.reset();
  this.IsInEditmode=false;
  this.EmitUpdate.emit(updated_Obj);
}
 }

}
