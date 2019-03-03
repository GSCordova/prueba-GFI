import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'search', component: SearchComponent}
];

export const app_routing = RouterModule.forRoot(routes);
