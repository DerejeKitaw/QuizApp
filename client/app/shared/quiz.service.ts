import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class QuizService {
  readonly rootUrl = 'http:localhost:2020';

  constructor(private http: HttpClient) {

   }

  insertParticipant(name: string, email: string) {
    const body = {
      Name: name,
      Email: email
    };
    return this.http.post(this.rootUrl + '/api/InsertParticipant', body);
  }
}
