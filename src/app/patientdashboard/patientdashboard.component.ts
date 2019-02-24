import { Component, OnInit } from '@angular/core';
import{Patients,Patient} from '../patient';

@Component({
  selector: 'app-patientdashboard',
  templateUrl: './patientdashboard.component.html',
  styleUrls: ['./patientdashboard.component.css']
})
export class PatientdashboardComponent implements OnInit {
 
  patients:Patient[];
  public _patient:Patient =new Patient();
  constructor() { 
    this.patients=Patients;
  }

  ngOnInit() {
    this.loadData(this.patients[0])
  }
  loadData(pt:Patient):void
  {
    debugger;
   this._patient=pt;
  }
}
