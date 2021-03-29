import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Questions } from "./Quiz.model"

@Injectable({
  providedIn: 'root'
})
export class QuizServiceService {

  constructor(public http:HttpClient) { }
  
loadQuizDetails():Observable<Questions[]> {
  return this.http.get<Questions[]>("/assets/Questions.json")
}


}