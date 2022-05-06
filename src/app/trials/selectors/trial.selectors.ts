import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTrial from '../reducers/trial.reducer';

export const selectTrialState = createFeatureSelector<fromTrial.State>(
  fromTrial.trialFeatureKey
);
