import * as fromPatient from '../reducers/patient.reducer';
import { selectPatientState } from './patient.selectors';

describe('Patient Selectors', () => {
  it('should select the feature state', () => {
    const result = selectPatientState({
      [fromPatient.patientFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
