import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[];

  constructor(private todoService: TodoService ) { }

  ngOnInit(): void {
    this.getTodos();
  }

  public getTodos(): void{
    this.todoService.getTodosList().subscribe(
      (response: Todo[]) => {
        this.todos = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
