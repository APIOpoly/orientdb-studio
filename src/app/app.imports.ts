import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {CommonModule} from '@angular/common';
import {UpgradeModule} from "@angular/upgrade/src/aot/upgrade_module";


export const APP_IMPORTS = [
  BrowserModule,
  CommonModule,
  FormsModule,
  HttpModule,
  UpgradeModule,
];
