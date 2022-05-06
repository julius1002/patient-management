import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrialSidebarComponent } from './trial-sidebar.component';

describe('TrialSidebarComponent', () => {
  let component: TrialSidebarComponent;
  let fixture: ComponentFixture<TrialSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrialSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrialSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
