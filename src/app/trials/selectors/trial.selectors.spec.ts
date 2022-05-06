import * as fromTrial from '../reducers/trial.reducer';
import { selectTrialState } from './trial.selectors';

describe('Trial Selectors', () => {
  it('should select the feature state', () => {
    const result = selectTrialState({
      [fromTrial.trialFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
