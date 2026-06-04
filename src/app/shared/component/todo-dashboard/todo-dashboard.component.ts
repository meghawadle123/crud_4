import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Itodo } from '../../models/todo';
import { todos } from '../../consts/todo';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.scss']
})
export class TodoDashboardComponent implements OnInit {
todoArr:Array<Itodo>=[];

editObj!:Itodo;
  constructor(private _matsnackbar:ServiceService) { }

  ngOnInit(): void {
    this.todoArr=todos
  }

  onAddTodo(todo:Itodo){
    this.todoArr.push(todo);

  }

  onRemove(id:string){
    let getindex=this.todoArr.findIndex(t=>t.id===id);
    this.todoArr.splice(getindex,1);
    this._matsnackbar.openSnackbar('the todoItem is Removed Succesfully!!!');
  }

  onEdit(todo:Itodo){
     this.editObj=todo
  }

  onUpdate(todo:Itodo){
    let getindex=this.todoArr.findIndex(t=>t.id===todo.id);
    this.todoArr[getindex]=todo;
    this._matsnackbar.openSnackbar('the todo is updated Succesfully')
  }
}
