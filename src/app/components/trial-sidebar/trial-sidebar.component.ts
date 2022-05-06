import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { State, Store } from '@ngrx/store';
import * as R from 'ramda';
import { debounceTime, filter, fromEvent, map, Observable, pluck, tap } from 'rxjs';
import { ajax } from "rxjs/ajax"
import { assignTrial, loadTrials } from 'src/app/trials/actions/trial.actions';
@Component({
  selector: 'app-trial-sidebar',
  templateUrl: './trial-sidebar.component.html',
  styleUrls: ['./trial-sidebar.component.css']
})
export class TrialSidebarComponent implements OnInit {

  @ViewChild('trialInput', { static: true }) trialInput: ElementRef | undefined;

  foundTrials$: Observable<any[]>;
  trialsLoading$: Observable<boolean>;
  selectedTrial$: Observable<any>;

  constructor(private state: Store<State<any>>) {
    this.foundTrials$ = this.state.select(({ trials: { trials } }: any) => trials)
    this.trialsLoading$ = this.state.select(({ trials: { trialsLoading } }: any) => trialsLoading)
    this.selectedTrial$ = this.state.select(({ trials: { selectedTrial } }: any) => selectedTrial)
  }

  ngOnInit(): void {

    fromEvent(this.trialInput?.nativeElement, "keyup")
      .pipe(
        pluck("target", "value"),
        filter((term: any) => term.length > 3),
        debounceTime(500))
      .subscribe((value: any) => this.state.dispatch(loadTrials({ data: value })))
  }

  assignTrial(trial: any) {
    this.state.dispatch(
      assignTrial({ data: { trial: trial } })
    )
  }

}
