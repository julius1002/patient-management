import { Action, createReducer, on } from '@ngrx/store';
import * as TrialActions from '../actions/trial.actions';

export const trialFeatureKey = 'trials';

export interface State {

}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,

  on(TrialActions.loadTrials, state => ({ ...state, trialsLoading: true, diseaseQuery: "", diseaseQueryResults: [] })),
  on(TrialActions.loadTrialsSuccess, (state, action) => ({ ...state, trialsLoading: false, trials: action.data })),
  on(TrialActions.loadTrialsFailure, (state, action) => ({ ...state, trialsLoading: false })),

  on(TrialActions.assignTrial, (state, { data: { trial } }) => ({ ...state, selectedTrial: trial })),
  on(TrialActions.assignTrialToPatient, (state: any) => {
    return ({ ...state, selectedTrial: undefined });
  }),

  // queryDiseases
  on(TrialActions.queryDiseases, (state, { data: diseaseQuery }) => ({ ...state, diseaseQuery, queryLoading: true })),
  on(TrialActions.queryDiseasesSuccess, (state: any, { data }) => {
    return ({ ...state, diseaseQueryResults: data, queryLoading: false });
  }),
);
