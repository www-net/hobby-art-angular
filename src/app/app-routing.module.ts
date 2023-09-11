import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CatalogComponent } from "./catalog/catalog.component";
import { MainPageComponent } from "./home/main-page/main-page.component";
import { MacrameComponent } from "./catalog/macrame/macrame.component";


//http://localhost:4200/ -> Home Component

const routes: Routes = [
    {path: '', component: MainPageComponent},
    {path: 'catalog', component: CatalogComponent},
    {path: 'catalog/macrame', component: MacrameComponent},

]

    @NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule],
})

export class AppRoutingModule {

}