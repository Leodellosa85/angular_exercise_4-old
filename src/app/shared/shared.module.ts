import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { CommandBarComponent } from './components/command-bar/command-bar.component';
import { RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button'; 


@NgModule({
  declarations: [
    HeaderComponent,
    CommandBarComponent
  ],
  imports: [
    CommonModule,RouterModule,MatButtonModule
  ],
  exports: [HeaderComponent,CommandBarComponent]
})
export class SharedModule { }
