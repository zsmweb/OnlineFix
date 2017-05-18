import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '@angular/material';
import 'hammerjs';

import { MonacoEditorComponent } from "./monaco/monaco.component";
import {RouterModule} from '@angular/router';

import { AppComponent,EditorContent, CompareContent, TerminalContent } from './app.component';
import {TABS_DEMO_ROUTES} from './app.router';


@NgModule({
  declarations: [
    AppComponent,
    MonacoEditorComponent,
    EditorContent, CompareContent, TerminalContent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(TABS_DEMO_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
