import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, pluck, tap, filter } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as TrialActions from '../actions/trial.actions';
import { ajax } from 'rxjs/ajax';
import * as R from 'ramda';



@Injectable()
export class TrialEffects {

  loadTrials$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(TrialActions.loadTrials),
      concatMap(({ data }) =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        ajax(`https://clinicaltrials.gov/api/query/full_studies?expr=${data}&min_rnk=1&max_rnk=10&fmt=json`)
          .pipe(
            pluck("response", "FullStudiesResponse", "FullStudies"),
            map((fullStudies: any) => R.map(
              ({ Study:
                { ProtocolSection:
                  { IdentificationModule: { Organization: { OrgFullName } },
                    StatusModule: { OverallStatus, StatusVerifiedDate },
                    DescriptionModule: { BriefSummary },
                    EligibilityModule: { EligibilityCriteria, HealthyVolunteers },
                    ContactsLocationsModule
                  }
                }
              }: any) =>
                ({ OrgFullName, OverallStatus, StatusVerifiedDate, BriefSummary, EligibilityCriteria, HealthyVolunteers, ContactsLocationsModule }))(fullStudies)),
          ).pipe(
            map(data => TrialActions.loadTrialsSuccess({ data })),
            catchError(error => of(TrialActions.loadTrialsFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) { }

}