import { createFeatureSelector } from '@ngrx/store';
import * as fromPatient from '../reducers/patient.reducer';

export const selectPatientState = createFeatureSelector<fromPatient.State>(
  fromPatient.patientFeatureKey
);
