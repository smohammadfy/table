import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatButtonToggleModule,
  MatCardModule, MatDatepickerModule,
  MatFormFieldModule,
  MatGridListModule, MatIconModule,
  MatInputModule,
  MatListModule, MatSidenavModule, MatTableModule,
  MatToolbarModule, MatNativeDateModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import { LastsellmoreComponent } from './lastsellmore/lastsellmore.component';
import {HttpClientModule} from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    LastsellmoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatIconModule,
    MatTableModule,
    MatSidenavModule,
    MatButtonToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
    MatDialogModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
