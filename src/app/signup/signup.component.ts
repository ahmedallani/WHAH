import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  name: Object;
  constructor(private _http: HttpService) {}

  ngOnInit(): void {}
  handleClick() {
    this._http.google().subscribe((data) => {
      // this.name = data;
      console.log(data);
    });
  }
}
