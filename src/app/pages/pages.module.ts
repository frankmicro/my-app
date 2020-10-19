import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import {TableModule} from 'primeng/table';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PagesRoutingModule,
    TableModule
  ]
})
export class PagesModule { }
