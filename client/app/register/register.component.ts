import { Component, OnInit } from '@angular/core';
import { QuizService } from '../shared/quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

   emailPattern = '^[a-zA-Z0-9\\.!#%&\'*+\/=?^_`\\{|\\}~-]+@([a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,}$';
  constructor(private quizeService: QuizService, private route: Router) { }

  ngOnInit() {
  }
  OnSubmit(name: string, email: string) {
    this.quizeService.insertParticipant(name, email).subscribe(
      data => {
        console.log(data);
        // localStorage.clear();
        // localStorage.setItem('participant', JSON.stringify(data));
        // this.route.navigate(['/quiz']);
      }
    );
}
}
