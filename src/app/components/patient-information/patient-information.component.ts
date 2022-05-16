import { Component, Input, OnInit } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { filter, map, of, pipe, Subject } from 'rxjs';
import { Patient } from 'src/app/patient';
import { deletePatient, updatePatients } from 'src/app/patients/actions/patient.actions';

@Component({
  selector: 'app-patient-information',
  templateUrl: './patient-information.component.html',
  styleUrls: ['./patient-information.component.css']
})
export class PatientInformationComponent implements OnInit {

  @Input()
  patient!: Patient;

  selectedValue$: Subject<any> = new Subject();

  wardTypes: string[] = [
    'Emergency',
    'Cardiology',
    'ICU',
    'Neurology',
    'Oncology',
    'Maternity'
  ];

  constructor(private state: Store<State<any>>) {
    this.selectedValue$.pipe(map(({ value }) => ({ ...this.patient, ward: value })))
      .subscribe((patient: Patient) => this.state.dispatch(updatePatients({ data: patient })))
  }

  ngOnInit(): void { }

  deletePatient() {
    of(0)
      .pipe(
        filter(() => confirm("Do you want to delete this patient?")))
      .subscribe(() => this.state.dispatch(deletePatient({ data: this.patient })))
  }
}
