import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

import { LayoutAppComponent } from "./layout/layout.component";
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarModule } from "./sidebar/sidebar.module";
import { NavbarModule } from "./shared/navbar/navbar.module";
import { FooterModule } from "./shared/footer/footer.module";
import { ModalAppModule } from "./shared/modal/modal.module";
import { LoadingAppModule } from "./shared/loading/loading.module";
import { LoginComponent } from './pages/login/login.component';
import { ReactiveFormsModule, FormControlDirective } from "@angular/forms";
import { FormModule, FormCheckComponent, FormCheckInputDirective, FormCheckLabelDirective, FormDirective, FormFeedbackComponent } from "@coreui/angular";


@NgModule({
  declarations: [
    AppComponent,
    LayoutAppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes,{
      useHash: true
    }),
    SidebarModule,
    NavbarModule,
    FooterModule,
    ModalAppModule,
    LoadingAppModule,
    ReactiveFormsModule,
    FormModule,
    ModalAppModule,
    FormCheckComponent,
    FormCheckInputDirective,
    FormCheckLabelDirective,
    // FormControlDirective,
    FormDirective,
    FormFeedbackComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
