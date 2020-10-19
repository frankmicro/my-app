import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionRoutingModule } from './transaction-routing.module';
import { TransactionComponent } from './components/transaction/transaction.component';
import { AuthGuard } from '../../shared/guards/auth.guard';
import { RouterModule, Routes } from '@angular/router';
import {TableModule} from 'primeng/table';

const routes: Routes = [
  {
    'path': '',
    'children': [
      {
        'path': '',
        'canActivate': [AuthGuard],
        'component': TransactionComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [TransactionComponent],
  imports: [
    CommonModule,
    TransactionRoutingModule,
    RouterModule.forChild(routes),
    TableModule
  ]
})
export class TransactionModule { }
