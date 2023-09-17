import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test';


  names: string[]=["kiran acharya","sandep hegde","john doe","vishwanath"];
  status:string[]=["consult","revisit"];
  clock:string[]=["06:00","06:15","06:30","07:00","07:15","07:30"];
  phone:string[]=["+91 987654321"];
  doctor:string[]=["dr.ananth"];

  user:{name:string,status:string,clock:string,phone:string,doctor:string,img:string}={
    name:"kiran acharya",
    status:"consult",
    clock:"06:00",
    doctor:"dr.ananth",
    phone:"+91 987654321",
    img:"skmjll"
  }
































  }
}
