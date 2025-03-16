import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TeamsComponent } from './pages/teams/teams.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { MatchResultsComponent } from './pages/match-results/match-results.component';
import { MatchesTableComponent } from './pages/matches-table/matches-table.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'teams', component: TeamsComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'match-results', component: MatchResultsComponent },
  { path: 'matches-table', component: MatchesTableComponent }
];
