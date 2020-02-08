import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { AddNewLecComponent } from './add-new-lec/add-new-lec.component';
import { AddNewStudentComponent } from './add-new-student/add-new-student.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    AddNewLecComponent,
    AddNewStudentComponent
  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot([{
      path: 'AddNewLec',
      component: AddNewLecComponent
    },
  {
    path: 'AddNewStudent',
      component: AddNewStudentComponent
  }]),
    RouterModule.forRoot(AppRoutes,{
      useHash: true
    }),
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
