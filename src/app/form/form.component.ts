import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})


export class FormComponent implements OnInit {
  message = 'Hello, World!';
  canClick = false;
  emailAddress: String = '';
  changeEmail(e:any) {
    this.emailAddress = e.target.value;
    console.log('new email address', this.emailAddress)
  }
  writeCount(count: number) {
    console.warn(count);
  }
  sayMessage() {
    alert(this.message);
  }
  constructor() { }
  ngOnInit(): void {
  }
  ngOnChange(): void{

  }

}
