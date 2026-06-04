import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Itodo } from '../../models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
@Input()todoArr!:Array<Itodo>

@Output() EmitRemove:EventEmitter<string>=new EventEmitter<string>();

@Output() EmitObj:EventEmitter<Itodo>=new EventEmitter<Itodo>();
  constructor() { }

  trackbyFun(index:number,todo:Itodo){
    return todo.id;
  }
  ngOnInit(): void {
  }

  onRemove(id:string){
    this.EmitRemove.emit(id);
  }

  onEdit(todo:Itodo){
    this.EmitObj.emit(todo);
  }
}
