import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import { CardComponent } from './card/card.component';
import { SearchComponent } from './search/search.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list'; 
import {MatFormFieldModule} from '@angular/material/form-field';
import { NavBarComponent } from './nav-bar/nav-bar.component';



@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    SearchComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    CommonModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
