import { Action, createReducer, on } from '@ngrx/store';
import * as TrialActions from '../actions/trial.actions';

export const trialFeatureKey = 'trials';

export interface State {

}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,

  on(TrialActions.loadTrials, state => ({ ...state, trialsLoading: true })),
  on(TrialActions.loadTrialsSuccess, (state, action) => ({ ...state, trialsLoading: false, trials: action.data })),
  on(TrialActions.loadTrialsFailure, (state, action) => ({ ...state, trialsLoading: false })),

);
