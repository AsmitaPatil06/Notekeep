import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArchiveComponent } from './archive/archive.component';
import { InputNoteComponent } from './input-note/input-note.component';
import { NoteCardComponent } from './note-card/note-card.component';
import { PaintComponent } from './paint/paint.component';
import { ReminderComponent } from './reminder/reminder.component';
import { TrashComponent } from './trash/trash.component';

const routes: Routes = [

{path:'input' , component:InputNoteComponent},
{path:'card' , component:NoteCardComponent},
{path:'archive' , component:ArchiveComponent},
{path:'trash' , component:TrashComponent},
{path:'rem' , component:ReminderComponent},
{path:'paint' , component:PaintComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
