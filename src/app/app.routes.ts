import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
    { path: '', component: LoginComponent }
];

export const app_routing = RouterModule.forRoot(routes);
