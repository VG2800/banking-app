import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountCreation } from './pages/account-creation/account-creation';
import { Transactions } from './pages/transactions/transactions';
import { History } from './pages/history/history';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'create-account',
    pathMatch: 'full',
  },
  {
    path: 'create-account',
    component: AccountCreation,
  },
  {
    path: 'transactions',
    component: Transactions,
  },
  {
    path: 'history',
    component: History,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
