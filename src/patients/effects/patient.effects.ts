import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as PatientActions from '../actions/patient.actions';
import { PatientsService } from 'src/app/services/patients.service';
import { Patient } from 'src/app/patient';



@Injectable()
export class PatientEffects {

  loadPatients$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PatientActions.loadPatients),
      switchMap(() =>
        this.patientsService.getAll()
          .pipe(
            map(data => PatientActions.loadPatientsSuccess({ data })),
            catchError(error => of(PatientActions.loadPatientsFailure({ error }))))
      )
    );
  });

  updatePatients$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PatientActions.updatePatients),
      mergeMap((data: any) =>
        this.patientsService.updatePatients(data)
          .pipe(
            map((data: Patient) => PatientActions.updatePatientsSuccess({ data })),
            catchError(error => of(PatientActions.updatePatientsFailure({ error }))))
      )
    );
  });

  deletePatient$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PatientActions.deletePatient),
      mergeMap(({ data }) =>
        of(data)
          .pipe(
            map((data: Patient) => PatientActions.deletePatientSuccess({ data: data })),
            catchError(error => of(PatientActions.deletePatientFailure({ error }))))
      )
    );
  });

  filterPatients$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PatientActions.filterPatients),
      switchMap((data: any) =>
        of(data)
          .pipe(
            map((data) => PatientActions.filterPatientsSuccess(data)),
            catchError(error => of(PatientActions.filterPatientsFailure({ error }))))
      )
    );
  });

  addPatients$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PatientActions.addPatients),
      mergeMap(({ data }: any) =>
        this.patientsService.addPatients(data)
          .pipe(
            map(data => PatientActions.addPatientsSuccess({ data })),
            catchError(error => of(PatientActions.loadPatientsFailure({ error }))))
      )
    );
  });

  constructor(private actions$: Actions, private patientsService: PatientsService) { }

}
