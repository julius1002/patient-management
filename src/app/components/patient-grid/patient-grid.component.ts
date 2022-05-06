import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import faker from '@faker-js/faker';
import { State, Store } from '@ngrx/store';
import { debounceTime, fromEvent, Observable, pluck } from 'rxjs';
import { Patient } from 'src/app/patient';
import { addPatients, filterPatients, loadPatients } from 'src/app/patients/actions/patient.actions';

@Component({
  selector: 'app-patient-grid',
  templateUrl: './patient-grid.component.html',
  styleUrls: ['./patient-grid.component.css']
})
export class PatientGridComponent implements OnInit {

  @ViewChild('filterInput', { static: true }) filterInput: ElementRef | undefined;

  wardTypes = [
    'Emergency',
    'Cardiology',
    'ICU',
    'Neurology',
    'Oncology',
    'Maternity'
  ];

  patientData$: Observable<Patient[]>;
  loading$: Observable<boolean>;
  constructor(private state: Store<State<any>>) {

    this.state.dispatch(loadPatients())

    this.loading$ = state.select(({ patients: { loading } }: any) => loading)
    this.patientData$ = state.select(({ patients: { patients } }: any) => patients)

  }

  ngOnInit(): void {

    fromEvent(this.filterInput?.nativeElement, "keyup")
      .pipe(
        pluck("target", "value"),
        debounceTime(500))
      .subscribe((value: any) => this.state.dispatch(filterPatients({ data: value })))
  }

  addPatient() {
    this.state.dispatch(addPatients({ // TODO swap with form inputs
      data: [{
        firstname: faker.name.firstName(),
        lastname: faker.name.lastName(),
        avatar: faker.image.avatar(),
        id: faker.datatype.uuid(),
        ward: this.wardTypes[Math.floor(Math.random() * this.wardTypes.length)],
        phoneNumber: faker.phone.phoneNumber()
      }]
    }))
  }
}