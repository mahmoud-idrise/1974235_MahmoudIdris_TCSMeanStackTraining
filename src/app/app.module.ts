import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrakerAppComponent } from './traker-app/traker-app.component';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    AppComponent,
    TrakerAppComponent,
    TrakerAppComponent,
   
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTableModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
