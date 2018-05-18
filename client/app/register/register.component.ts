import { Component, OnInit } from '@angular/core';
import { QuizService } from '../shared/quiz.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  addParticipantForm: FormGroup;


  emailPattern = '^[a-zA-Z0-9\\.!#%&\'*+\/=?^_`\\{|\\}~-]+@([a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,}$';

  constructor(
    private quizeService: QuizService,
    private route: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.addParticipantForm = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required)
    });
  }
  OnSubmit(name: string, email: string) {
    this.quizeService.insertParticipant(this.addParticipantForm.value).subscribe(
      data => {
        console.log(data);
        // localStorage.clear();
        // localStorage.setItem('participant', JSON.stringify(data));
        // this.route.navigate(['/quiz']);
      }
    );
}
}
