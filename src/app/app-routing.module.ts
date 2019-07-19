import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';
import { ArticuloComponent } from './components/articulo/articulo.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ImagenComponent } from './components/imagen/imagen.component';


const routes: Routes = [
  {path: 'home', component: PrincipalComponent},
  {path: 'articulo', component: ArticuloComponent},
  {path: 'galeria', component: GaleriaComponent},
  {path: 'galeria/:img', component: ImagenComponent},
  {path: 'acerca', component: AboutComponent},
  {path: 'contacto', component: ContactComponent},
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
