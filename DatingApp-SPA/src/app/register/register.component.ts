import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // @Input() valuesFromHome: any;
  @Output() cancelRegister: EventEmitter<boolean> = new EventEmitter();
  model: any = {};

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  register(): void {
    // console.log(this.model);
    this.authService.register(this.model).subscribe(() => {
      console.log('Registration Successful!')
    }, error => {
      console.log(error);
    });
  }

  cancel(): void {
    console.log('canceled');
    this.cancelRegister.emit(false);
  }
}
