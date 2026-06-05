import { Component, OnInit } from '@angular/core';
import { Ipost } from '../../models/post';
import { postData } from '../../consts/post';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-post-dashboard',
  templateUrl: './post-dashboard.component.html',
  styleUrls: ['./post-dashboard.component.scss']
})
export class PostDashboardComponent implements OnInit {
postArr:Array<Ipost>=[];

EditObj!:Ipost
  constructor(private _matsnackbar:ServiceService) { }

  ngOnInit(): void {

    this.postArr=postData;

  }

  onAddpost(post:Ipost){
    this.postArr.push(post);
    this._matsnackbar.openSnackbar('the post is Added Succesfully !!!')
  }

  onremove(id:string){
    let getindex=this.postArr.findIndex(t=>t.id===id);
    this.postArr.splice(getindex,1);
    this._matsnackbar.openSnackbar('the post is removed Succesfully!!!');
  }

  onEdit(post:Ipost){
     this.EditObj=post;
  }


  onUpdate(post:Ipost){
    let getindex=this.postArr.findIndex(t=>t.id===post.id);
    this.postArr[getindex]=post;
    this._matsnackbar.openSnackbar('the post is updated succesfully');
  }
}
