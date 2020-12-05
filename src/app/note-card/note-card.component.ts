import { AstMemoryEfficientTransformer } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Note } from '../models/note.model';
import { CommonService } from  '../common.service';
import { HttpClient} from '@angular/common/http';
import {MatDialog} from '@angular/material/dialog';
import { EditCardComponent } from '../edit-card/edit-card.component';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.css']
})
export class NoteCardComponent implements OnInit {

  notes : Note[]=[];

  an1:any;
  i:any;
  i1:any;
  constructor(private ES:CommonService,private _router:Router,public dialog: MatDialog) { }

  ngOnInit(): void {
  // this.notes =this.ES.getNotes();
      
   this.get();

   this.i=this.ES.getId();
    
  }

  get(){

  this.ES.getNotes().subscribe(
    (response)=>
    {
    this.notes=response;
    
   },
   (error) => console.log(error)
   
   )
  }

  //deltet code
   deleteNote(an){
      this.ES.deleteNote(an.id).subscribe(()=> {
        this.get();         
      })
      this.ES.trash(an).subscribe(()=>{
      })
    }

  // deleteNote(an){
  //   this.ES.deleteNote(an.id).subscribe(()=> {
  //     this.get();         
  //   })
  //   this.ES.trash(an,an.myimage).subscribe(()=>{
  //    // console.log("an",an ,  "img",an.myimage)
  //   })
  // }


    archiveNote(an){
      this.ES.archive(an).subscribe(()=>{
        this.get();
      })
    }

     copy(an){
        this.an1=an;
      
        console.log(this.an1);
        this.i1=this.i+1;

       this.ES.makeCopy(this.an1,this.i1).subscribe(()=>{
         this.get();
       })
     }
    drawing(){

      this._router.navigate(['/paint']);
    }




    openDialog(an) {
      const dialogRef = this.dialog.open(EditCardComponent);
  
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }

    colorpop() {
      // var popup = document.getElementById("color1");
      // console.log(popup);
     
     
    }
    
 
}