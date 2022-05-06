import { createAction, props } from '@ngrx/store';
import { Patient } from 'src/app/patient';

// getAll
export const loadPatients = createAction(
  '[Patient] Load Patients'
);

export const loadPatientsSuccess = createAction(
  '[Patient] Load Patients Success',
  props<{ data: Patient[] }>()
);

export const loadPatientsFailure = createAction(
  '[Patient] Load Patients Failure',
  props<{ error: any }>()
);

// update
export const updatePatients = createAction(
  '[Patient] Update Patients',
  props<{ data: any }>()
);

export const updatePatientsSuccess = createAction(
  '[Patient] Update Patients Success',
  props<{ data: any }>()
);

export const updatePatientsFailure = createAction(
  '[Patient] Update Patients Failure',
  props<{ error: any }>()
);

// delete
export const deletePatient = createAction(
  '[Patient] Delete Patient',
  props<{ data: Patient }>()
);

export const deletePatientSuccess = createAction(
  '[Patient] Delete Patient Success',
  props<{ data: Patient }>()
);

export const deletePatientFailure = createAction(
  '[Patient] Delete Patient Failure',
  props<{ error: any }>()
);


//filter
export const filterPatients = createAction(
  '[Patient] Filter Patients',
  props<{ data: string }>()
);

export const filterPatientsSuccess = createAction(
  '[Patient] Filter Patients Success',
  props<{ data: any }>()
);

export const filterPatientsFailure = createAction(
  '[Patient] Filter Patients Failure',
  props<{ error: any }>()
);

// add
export const addPatients = createAction(
  '[Patient] Add Patients',
  props<{ data: Patient[] }>()
);

export const addPatientsSuccess = createAction(
  '[Patient] Add Patients Success',
  props<{ data: Patient[] }>()
);

export const addPatientsFailure = createAction(
  '[Patient] Add Patients Failure',
  props<{ error: any }>()
);