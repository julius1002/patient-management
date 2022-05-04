import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientInformationComponent } from './components/patient-information/patient-information.component';
import { PatientGridComponent } from './components/patient-grid/patient-grid.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { environment } from 'src/environments/environment';
import * as fromPatient from '../patients/reducers/patient.reducer';
import { PatientEffects } from '../patients/effects/patient.effects';

@NgModule({
  declarations: [
    AppComponent,
    PatientInformationComponent,
    PatientGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([]),
    StoreModule.forFeature(fromPatient.patientFeatureKey, fromPatient.reducer),
    EffectsModule.forFeature([PatientEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
