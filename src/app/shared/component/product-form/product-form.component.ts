import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Iproduct } from '../../models/product';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit ,OnChanges{

IsinEditMode:boolean=false;

@ViewChild('prodForm')prodForm!:NgForm;

@Input() editObj!:Iproduct;


@Output() emitAddProd:EventEmitter<Iproduct>=new EventEmitter();

@Output() EmitUpdate:EventEmitter<Iproduct>=new EventEmitter();
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['editObj'].currentValue){
      this.IsinEditMode=true;
      this.prodForm.form.patchValue(this.editObj);
    }
  }


  ngOnInit(): void {

  }

  
  OnprodAdd(){
    if(this.prodForm.valid){
      let newObj:Iproduct={
        ...this.prodForm.value,
        productId:Date.now().toString()
      }
      this.prodForm.reset();
      this.emitAddProd.emit(newObj)
    }
  }
  

  onUpdateProduct(){
    if(this.prodForm.valid){
      let updated_obj:Iproduct={
        ...this.prodForm.value,
        productId:this.editObj.productId
      }
      this.EmitUpdate.emit(updated_obj);
      this.prodForm.reset();
      this.IsinEditMode=false;
    }
  }

}
