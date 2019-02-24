import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  uid :string;
  pwd:string;
  router:Router;

  constructor(private _router : Router) {
    this.router=_router;
   }

  ngOnInit() {
  }

  doLogin():void{
    debugger;
    if(this.uid=='harman' && this.pwd=='harman')
    {
       this.router.navigateByUrl('dashboard');
    }
    else
    {
      alert('Inavlid username or password');
    }
  }

}
