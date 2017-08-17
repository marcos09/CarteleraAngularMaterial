import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
import { AppComponent } from './app.component';
import {MdSliderModule} from '@angular/material';
import {MdGridListModule} from '@angular/material';
import {MdToolbarModule} from '@angular/material';
import {MdIconModule} from '@angular/material';
import {MdMenuModule} from '@angular/material';
import {MdButtonModule} from '@angular/material';
import {MdInputModule} from '@angular/material';
import {MdCardModule} from '@angular/material';
import {MdSidenavModule} from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";


import {Component} from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, MdSliderModule, MdGridListModule, MdToolbarModule, MdIconModule, MdButtonModule, MdMenuModule, MdInputModule, MdCardModule, MdSidenavModule, 
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

@Component({
  selector: 'grid-list-overview-example'
})
export class GridListOverviewExample {}

@Component({
  selector: 'toolbar-multirow-example'
})
export class ToolbarMultirowExample {}

@Component({
  selector: 'menu-icons-example'
})
export class MenuIconsExample {}

@Component({
  selector: 'input-prefix-suffix-example'
})
export class InputPrefixSuffixExample { }


@Component({
  selector: 'card-fancy-example'
})
export class CardFancyExample {}

@Component({
  selector: 'button-types-example'
})
export class ButtonTypesExample {}