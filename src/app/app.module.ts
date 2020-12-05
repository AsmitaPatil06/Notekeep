import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';

import { InputNoteComponent } from './input-note/input-note.component';
import { NoteCardComponent } from './note-card/note-card.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatExpansionModule} from '@angular/material/expansion';
import { ArchiveComponent } from './archive/archive.component';
import { TrashComponent } from './trash/trash.component';
import { ReminderComponent } from './reminder/reminder.component';
import { PaintComponent } from './paint/paint.component';


import {MatDialogModule} from '@angular/material/dialog';
import { EditCardComponent } from './edit-card/edit-card.component';


  //  import { ColorPickerComponent } from '@syncfusion/ej2-angular-inputs'
  // import { SplitButtonComponent } from '@syncfusion/ej2-angular-splitbuttons';


@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    InputNoteComponent,
    NoteCardComponent,
    ArchiveComponent,
    TrashComponent,
    ReminderComponent,
    PaintComponent,
    EditCardComponent,
      // ColorPickerComponent, 
      // SplitButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatSelectModule, 
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatExpansionModule,
    ReactiveFormsModule,
    MatCardModule,
    HttpClientModule,
    MatGridListModule,
    MatMenuModule,
    MatDialogModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
