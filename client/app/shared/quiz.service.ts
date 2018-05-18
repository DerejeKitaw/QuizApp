import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Participant } from '../shared/models/participant.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class QuizService {
  readonly rootUrl = 'http:localhost:2020';

  constructor(private http: HttpClient) {

   }

  insertParticipant(participant: Participant): Observable<Participant> {
    return this.http.post<Participant>('/api/insertParticipant', participant);
  }
}
