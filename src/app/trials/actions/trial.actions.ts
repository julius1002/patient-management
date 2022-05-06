import { createAction, props } from '@ngrx/store';

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


