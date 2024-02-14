import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

//componentes
import { ListadoComprasComponent } from './components/listado-compras-ceramica/listado-compras.component';
import { VerCompraComponent } from './components/ver-compras/ver-compra.component';
import { AgregarEditarCompraComponent } from './components/agregar-editar-compras/agregar-editar-compra.component';

const routes: Routes = [
  {path:'', redirectTo: 'listCompras', pathMatch: 'full'},
  {path:'listCompras', component: ListadoComprasComponent },
  {path:'AgregarCompra', component: AgregarEditarCompraComponent },
  {path: 'verCompras/:id', component: VerCompraComponent},
  {path: 'EditarMascota/:id', component: AgregarEditarCompraComponent},
  {path: '**', redirectTo: 'listCompra', pathMatch: 'full'}
];

const config: ExtraOptions = {
  useHash: true,
  onSameUrlNavigation: 'reload',
  scrollPositionRestoration: 'enabled'
};

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
