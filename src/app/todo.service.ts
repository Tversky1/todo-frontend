import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from './todo';
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private baseURL = "http://localhost:8080";

  constructor(private httpClient: HttpClient) { }

    getTodosList(): Observable<Todo[]>{
      return this.httpClient.get<Todo[]>(`${this.baseURL}/todo/get`);
    }

   
}
