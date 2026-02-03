import { Routes } from '@angular/router';
import { YesComponent } from './yes-component/yes-component';
import { HomeComponent } from './home-component/home-component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'yes', component: YesComponent}
];
