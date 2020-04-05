import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataTableModule, CheckboxModule} from 'primeng/primeng';
import { HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PrimengDataTableComponent } from './primeng-data-table/primeng-data-table.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { FormsModule } from '@angular/forms';
import { AsyncAwaitComponent } from './async-await/async-await.component';

import { UsernameService } from './service/username.service';
import { PhotoService } from './photo.service';
import { AsyncAwaitService } from './service/async-await.service';

@NgModule({
  declarations: [
    AppComponent,
    PrimengDataTableComponent,
    ParentComponent,
    ChildComponent,
    OneComponent,
    TwoComponent,
    AsyncAwaitComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    DataTableModule,
    CheckboxModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PhotoService,UsernameService,AsyncAwaitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
