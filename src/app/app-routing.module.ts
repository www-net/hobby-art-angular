import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { CatalogComponent } from "./catalog/catalog.component";
import { MainPageComponent } from "./home/main-page/main-page.component";


//http://localhost:4200/ -> Home Component

const routes: Routes = [
    {path: '', component: MainPageComponent},
    {path: 'catalog', component: CatalogComponent},

]

    @NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule],
})

export class AppRoutingModule {

}