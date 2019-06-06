import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { ForgotpasswordComponent } from "./forgotpassword/forgotpassword.component";
import { MycoursesComponent } from "./mycourses/mycourses.component";
import { CoursedetailComponent } from './coursedetail/coursedetail.component';


const routes: Routes = [
    { path: "", redirectTo: "/items", pathMatch: "full" },
    { path: "items", component: ItemsComponent },
    { path: "item/:id", component: ItemDetailComponent },
    { path: "forgotpassword", component:ForgotpasswordComponent},
    { path: "mycourses", component:MycoursesComponent},
    { path: "course/:heading", component: CoursedetailComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
