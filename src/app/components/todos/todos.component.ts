import { Component, OnInit } from '@angular/core';
import { Todo } from "../../Todo";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todoItems : any;
  todos !: Todo[];
  constructor() {
    this.todoItems = localStorage.getItem("myTodos")
    if(this.todoItems === null){
      this.todos = []
    }else{
      this.todos = JSON.parse(this.todoItems)
    }
   }
  ngOnInit(): void {
  }

  todoDelete(todo:Todo){
    console.log(todo);
    const index = this.todos.indexOf(todo)
    this.todos.splice(index,1);   
    localStorage.setItem("myTodos", JSON.stringify(this.todos))
  }
  todoAdd(todo:Todo){
    console.log(todo);
    this.todos.push(todo)
    localStorage.setItem("myTodos", JSON.stringify(this.todos))
  }
}
