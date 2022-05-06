import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { TrialEffects } from './trial.effects';

describe('TrialEffects', () => {
  let actions$: Observable<any>;
  let effects: TrialEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TrialEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(TrialEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
