import { HomeComponent } from "./components/home/home.component";
import { CineComponent } from "./components/cine/cine.component";
import { MusicaComponent } from "./components/musica/musica.component";
import { TelevisionComponent } from "./components/television/television.component";
import { MenuComponent } from "./components/menu/menu.component";

//NECESITAMOS LOS SIGUIENTES MODULOS PARA REALIZAR ROUTING
import { Routes, RouterModule } from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import { Error404Component } from "./components/error404/error404.component";
import { NumerodobleComponent } from "./components/numerodoble/numerodoble.component";
import { MenucollatzComponent } from "./components/menucollatz/menucollatz.component";

//DEFINIMOS UN ARRAY DE OBJETOS Routes
const appRoutes: Routes = [
    {path:"",component: HomeComponent},
    {path:"numerodoble/:numero",component:NumerodobleComponent},
    {path:"numerodoble",component:NumerodobleComponent},
    {path:"musica", component:MusicaComponent},
    {path:"cine", component:CineComponent},
    {path:"television",component:TelevisionComponent},
    {path:"menu",component:MenuComponent},
    {path:"manucollatz",component:MenucollatzComponent},
    {path:"collatz",component:MenucollatzComponent},
    {path:"**",component:Error404Component},
]

//DE ESTA CLASE DEBEMOS EXPORTAR DOS ELEMENTOS PARA app.module.ts
export const appRoutingProviders: any[] =[];
export const routing: ModuleWithProviders<any>=
RouterModule.forRoot(appRoutes);