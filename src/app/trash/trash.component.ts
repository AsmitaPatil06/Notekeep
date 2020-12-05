import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Note } from '../models/note.model';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.css']
})
export class TrashComponent implements OnInit {
  allDeletNote: Note[]=[];

  constructor(private ES:CommonService) { }

  ngOnInit(): void {

    this.getLatestTrashNote();
  }

  getLatestTrashNote() {

    this.ES.getTrashNotes().subscribe((response) => {

      this.allDeletNote = response;
    })
  }

  
  deletetrashNote(deletenote){
    this.ES.deleteTrashNote(deletenote.id).subscribe(()=> {
      this.getLatestTrashNote();         
    })
  }
  getTrashNote(deletenote){

    this.ES.deleteTrashNote(deletenote.id).subscribe(()=>{
      this.getLatestTrashNote();
    })

    this.ES.getTrashNotesAgain(deletenote).subscribe(()=>{
    this.getLatestTrashNote();   

    })

  }




}
