import { Injectable } from '@angular/core';
import faker from '@faker-js/faker';
import { State, Store } from '@ngrx/store';
import * as R from 'ramda';
import { delay, of } from 'rxjs';
import { Observable } from 'rxjs';
import { Patient } from '../patient';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  wardTypes: string[] = [
    'Emergency',
    'Cardiology',
    'ICU',
    'Neurology',
    'Oncology',
    'Maternity'
  ];

  constructor(private state: Store<State<any>>) { }

  getAll(): Observable<any> {
    return of(R.map(() =>
    ({
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      avatar: faker.image.avatar(),
      id: faker.datatype.uuid(),
      ward: this.wardTypes[Math.floor(Math.random() * this.wardTypes.length)],
      phoneNumber: faker.phone.phoneNumber(),
      trials: []
    })
      , R.range(1, 25)))
      .pipe(
        //delay(1000)
      )
  }

  updatePatients(value: Patient): Observable<Patient> {
    return of(value).pipe(
      delay(500)
    );
  }

  addPatients(patients: Patient[]): Observable<Patient[]> {
    return of(patients)
      .pipe(
        delay(1000))
  }

}
