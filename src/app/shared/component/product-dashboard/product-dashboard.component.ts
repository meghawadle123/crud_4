import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../../models/product';
import { productArr } from '../../consts/product';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss']
})
export class ProductDashboardComponent implements OnInit {
prodArr:Array<Iproduct>=[];

editObj!:Iproduct
  constructor(private _matsnckabr:ServiceService) { }

  ngOnInit(): void {
    this.prodArr=productArr;
  }


  Onremove(id:string){
    let getindex=this.prodArr.findIndex(t=>t.productId===id);
     this.prodArr.splice(getindex,1);
    this._matsnckabr.openSnackbar('The product is removed Succesfully !!!')
  }

  onEdit(product:Iproduct){
   this.editObj=product;
  }

  onAddprod(product:Iproduct){
    this.prodArr.push(product);
    this._matsnckabr.openSnackbar('the product is Added succesfully!!')
  }

  Onupdate(product:Iproduct){
    let getindex=this.prodArr.findIndex(t=>t.productId===product.productId);
    this.prodArr[getindex]=product;
    this._matsnckabr.openSnackbar('The Product is Updated succesfully!!!')
  }
}
