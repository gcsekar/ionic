import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the TodoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TodoProvider {
  todos = [];
  
  constructor(public http: HttpClient) {
    
  }

  public getToDos(){
    return this.todos;
  }
  
  public addToDo(todo){
    this.todos.push(todo);
  }
  
}
