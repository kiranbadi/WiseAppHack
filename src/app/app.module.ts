import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { TNSFontIconModule } from 'nativescript-ngx-fonticon';
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { NativeScriptCommonModule } from "nativescript-angular/common";



import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { SocialComponent } from './social/social.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { MycoursesComponent } from './mycourses/mycourses.component';
import { CoursedetailComponent } from './coursedetail/coursedetail.component';

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptUIListViewModule,
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptFormsModule,
        NativeScriptHttpClientModule,
        TNSFontIconModule.forRoot({
            'fa': './assets/font-awesome.css',
            'ion': './assets/ionicons.css'
        })
    ],
    declarations: [
        AppComponent,
        ItemsComponent,
        ItemDetailComponent,
        SocialComponent,
        ForgotpasswordComponent,
        MycoursesComponent,
        CoursedetailComponent
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
