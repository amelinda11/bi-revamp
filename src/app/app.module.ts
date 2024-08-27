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


@NgModule({
  declarations: [
    AppComponent,
    LayoutAppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes,{
      useHash: true
    }),
    SidebarModule,
    NavbarModule,
    FooterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
