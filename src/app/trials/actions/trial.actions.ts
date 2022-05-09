import { createAction, props } from '@ngrx/store';

// load trials
export const loadTrials = createAction(
  '[Trial] Load Trials',
  props<{ data: string }>()
);

export const loadTrialsSuccess = createAction(
  '[Trial] Load Trials Success',
  props<{ data: any }>()
);

export const loadTrialsFailure = createAction(
  '[Trial] Load Trials Failure',
  props<{ error: any }>()
);

// assign trials
export const assignTrial = createAction(
  '[Trial] Assign Trial',
  props<{ data: any }>()
);
export const assignTrialToPatient = createAction(
  '[Trial] Assign Trial To Patient',
  props<{ data: any }>()
);

export const assignTrialToPatientSuccess = createAction(
  '[Trial] Assign Trial To Patient Success',
  props<{ data: any }>()
);

export const assignTrialToPatientFailure = createAction(
  '[Trial] Assign Trial To Patient Failure',
  props<{ error: any }>()
);

// load illness result
export const queryDiseases = createAction(
  '[Disease] Query Diseases',
  props<{ data: any }>()
);

export const queryDiseasesSuccess = createAction(
  '[Disease] Query Diseases Success',
  props<{ data: any }>()
);

export const queryDiseasesFailure = createAction(
  '[Disease] Query Diseases Failure',
  props<{ error: any }>()
);