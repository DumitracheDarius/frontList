import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from "./app-routing.module";
import { ListTableComponent } from './Event/List/list-table/list-table.component';
import {TableModule} from "primeng/table";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';


@NgModule({
  declarations: [AppComponent, ListTableComponent],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    TableModule,
    HttpClientModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far, fab);
  }
}
