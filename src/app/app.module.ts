import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdCheckboxModule, MdSlideToggleModule } from '@angular/material';
import 'hammerjs';

// Components
import { AppComponent } from './app.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { StylesComponent } from './components/styles/styles.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { ParamComponent } from './components/param/param.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { ServiceExampleComponent } from './components/service-example/service-example.component';
import { SimpleServiceComponent } from './components/simple-service/simple-service.component';
import { ObservableServiceComponent } from './components/observable-service/observable-service.component';
import { HttpServiceComponent } from './components/http-service/http-service.component';

// Services
import { SimpleService } from './services/simple/simple.service';
import { ObservableService } from './services/observable/observable.service';
import { HttpService } from './services/http/http.service';


// Routes
const appRoutes: Routes = [
  {path: 'template-form', component: TemplateFormComponent },
  {path: 'reactive-form', component: ReactiveFormComponent },
  {path: 'styles', component: StylesComponent, children: [
    {path: ':id', component: ParamComponent}
  ] },
  {path: 'parent', component: ParentComponent },
  {path: 'services', component: ServiceExampleComponent },
  {path: '', component: HomeComponent },
  {path: '**', redirectTo: '/' }
];

@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    StylesComponent,
    NavComponent,
    HomeComponent,
    ParamComponent,
    ParentComponent,
    ChildComponent,
    ServiceExampleComponent,
    SimpleServiceComponent,
    ObservableServiceComponent,
    HttpServiceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot(),
    HttpModule,
    BrowserAnimationsModule,
    MdCheckboxModule,
    MdSlideToggleModule
  ],
  providers: [
    SimpleService,
    ObservableService,
    HttpService
   ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
