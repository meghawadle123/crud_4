import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Iproduct } from '../../models/product';
import { outputAst } from '@angular/compiler';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetconfirmComponent } from '../getconfirm/getconfirm.component';
import { config } from 'rxjs';

@Component({
  selector: 'app-product-post',
  templateUrl: './product-post.component.html',
  styleUrls: ['./product-post.component.scss']
})
export class ProductPostComponent implements OnInit {
@Input()getprodArr!:Array<Iproduct>;

@Output() EmitRemoveid:EventEmitter<string>=new EventEmitter();


@Output() emitEditObj:EventEmitter<Iproduct>=new EventEmitter();
  constructor(private _matdialog:MatDialog) { }

  ngOnInit(): void {

  }
trackByfun(index:number,product:Iproduct){
  return product.productId;
}

  onRemove(id:string){
    let config=new MatDialogConfig();
    config.width='350px';
    config.disableClose=true;
    config.data='Are you sure?you want to remove it!!!'
    let confirm=this._matdialog.open(GetconfirmComponent,config);
    confirm.afterClosed().subscribe({
      next:data=>{
        if(data){
           this.EmitRemoveid.emit(data);
        }
      }
    })
  }

  onEdit(product:Iproduct){
    this.emitEditObj.emit(product);
  }
}
