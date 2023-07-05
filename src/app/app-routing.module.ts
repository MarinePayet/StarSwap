import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonsComponent } from './persons/persons.component';
import { PlanetsComponent } from './planets/planets.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';

const routes: Routes = [
  {path: 'persons-component', component: PersonsComponent},
  {path: 'planets-component', component: PlanetsComponent},
  { path: 'detail/:id', component: PersonDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
