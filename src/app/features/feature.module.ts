import { NgModule } from "@angular/core";
import { HeaderComponent } from "../shared/components/header/header.component";
import { FooterComponent } from "../shared/components/footer/footer.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ErrorComponent } from './error/components/error/error.component';
import { HomeComponent } from "./home/components/home/home.component";
import { ShareModule } from "../shared/components/share.module";

@NgModule({
declarations:[HomeComponent,
    ErrorComponent
],
imports:[CommonModule,RouterModule,ShareModule],
exports:[HomeComponent,
    ErrorComponent
    ],
providers:[]

})
export class FeatureModule {}