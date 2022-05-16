import { createReducer, on } from '@ngrx/store';
import * as R from 'ramda';
import { Patient } from 'src/app/patient';
import * as PatientActions from '../actions/patient.actions';

export const patientFeatureKey = 'patients';

export interface State {

}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,
  on(PatientActions.loadPatients, state => ({ ...state, loading: true })),
  on(PatientActions.loadPatientsSuccess, (state, action) => ({
    ...state, loading: false, patients: action.data
  })),
  on(PatientActions.loadPatientsFailure, (state, action) => ({ ...state, loading: false })),

  on(PatientActions.updatePatients, (state, action) => ({ ...state, loading: true })),
  on(PatientActions.updatePatientsSuccess, (state: any, { data: { patient}}) => {
    return ({ ...state, loading: false, patients: R.map((pat: Patient) => (pat.id === patient.id) ? patient : pat)(state.patients) });
  }),
  on(PatientActions.updatePatientsFailure, (state, action) => ({ ...state, loading: false })),


  //deletepatient
  on(PatientActions.deletePatient, (state, action) => ({ ...state, loading: true })),
  on(PatientActions.deletePatientSuccess, (state: any, action: any) => {
    return ({
      ...state, loading: false, patients: R.filter((patient: Patient) => {
        return (patient.id !== action.data.id);
      })(state.patients)
    });
  }),
  on(PatientActions.deletePatientFailure, (state, action) => ({ ...state, loading: false })),

  // filterpatient
  on(PatientActions.filterPatients, (state, action) => ({ ...state, loading: true, query: action.data })),
  on(PatientActions.filterPatientsSuccess, (state: any, action: any) => ({
    ...state, loading: false, patients: R.filter(((patient: Patient) => R.startsWith(action.data, patient.firstname) || R.startsWith(action.data, patient.lastname) || R.startsWith(action.data, patient.firstname + " " + patient.lastname)))(state.patients),
    query: action.data
  })),
  on(PatientActions.filterPatientsFailure, (state, action) => ({ ...state, loading: false })),

  // add patient
  on(PatientActions.addPatients, (state: any, action) => ({ ...state, loading: true })),
  on(PatientActions.addPatientsSuccess, (state: any, action: any) => {
    return ({ ...state, loading: false, patients: [...state.patients, ...action.data] });
  }),
  on(PatientActions.addPatientsFailure, (state, action) => ({ ...state, loading: false })),

);
