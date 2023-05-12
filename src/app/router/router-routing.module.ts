import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsTableComponent } from '../cars/cars-table/cars-table.component';
import { EventDetailsComponent } from '../events/event-details/event-details.component';
import { EventsTableComponent } from '../events/events-table/events-table.component';
import { LoginPageComponent } from '../login-page/login-page.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'cars', component: CarsTableComponent },
  { path: 'events', component: EventsTableComponent },
  { path: 'events/:id', component: EventDetailsComponent},
  { path: '', component: LoginPageComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouterRoutingModule { }
