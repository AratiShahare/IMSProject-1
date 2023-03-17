import { TeacherDashboardComponent } from './dashboard/teacher-dashboard/teacher-dashboard.component';
import { AdminDashboardComponent } from './dashboard/admin-dashboard/admin-dashboard.component';
import { StudentDashboardComponent } from './dashboard/student-dashboard/student-dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = 
[  {path:'',redirectTo:'admin', pathMatch:'full'},

{path:'student',component:StudentDashboardComponent},
{path:'admin',component:AdminDashboardComponent},
{path:'teacher',component:TeacherDashboardComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
