import * as fromTrial from './trial.actions';

describe('loadTrials', () => {
  it('should return an action', () => {
    expect(fromTrial.loadTrials().type).toBe('[Trial] Load Trials');
  });
});
