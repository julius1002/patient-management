import { Component } from '@angular/core';
import { Patient } from './patient';
import { faker } from '@faker-js/faker';
import * as R from 'ramda'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'patient-management';

  wardTypes = [
    'Emergency',
    'Cardiology',
    'ICU',
    'Neurology',
    'Oncology',
    'Maternity'
  ];

  patientData: Patient[] = []
  
  constructor() {


    this.patientData = R.map(() => {
      return {
        firstname: faker.name.firstName(),
        lastname: faker.name.lastName(),
        avatar: faker.image.avatar(),
        id: faker.datatype.uuid(),
        ward: this.wardTypes[Math.floor(Math.random() * this.wardTypes.length)],
        phoneNumber: faker.phone.phoneNumber()
      }
    }
      , R.range(1, 25))
  }
}
