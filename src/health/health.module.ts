import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// shared modules
import { SharedModule } from './shared/shared.module';

// guards
import { AuthGuard } from '../auth/shared/guards/auth.guard';

export const ROUTES: Routes = [
  { path: 'schedule', canActivate: [AuthGuard], loadChildren: () => import('./schedule/schedule.module').then(m => m.ScheduleModule) },
  { path: 'meals', canActivate: [AuthGuard], loadChildren: () => import('./meals/meals.module').then(m => m.MealsModule) },
  { path: 'workouts', canActivate: [AuthGuard], loadChildren: () => import('./workouts/workouts.module').then(m => m.WorkoutsModule) },
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ]
})
export class HealthModule {}
