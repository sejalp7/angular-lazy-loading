import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdersComponent } from './orders.component';
import { RouteResolverService } from '../route-resolver/route-resolver.service';

const routes: Routes = [{ path: '', component: OrdersComponent, resolve: { data: RouteResolverService } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
