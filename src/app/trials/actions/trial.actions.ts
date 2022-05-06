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
