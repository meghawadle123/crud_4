import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ipost } from '../../models/post';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetconfirmComponent } from '../getconfirm/getconfirm.component';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {
@Input()getArr!:Array<Ipost>

@Output() emitRemoveId:EventEmitter<string>=new EventEmitter<string>();

@Output() emitEditObj:EventEmitter<Ipost>=new EventEmitter<Ipost>();
  constructor(private _matdialog:MatDialog) { }

  ngOnInit(): void {
  
  }
trackByfun(index:number,post:Ipost){
  return post.id;
}
  onRemove(id:string){
     let config=new MatDialogConfig();
    config.width='450px';
    config.disableClose=true;
    config.data='Are you sure? you want to remove it!!!'
     let confirm= this._matdialog.open(GetconfirmComponent,config);
     confirm.afterClosed().subscribe({
      next:data=>{
        if(data){
          this.emitRemoveId.emit(data)
        }
      }
     })
  }

  onEdit(post:Ipost){
     this.emitEditObj.emit(post);
  }

}
