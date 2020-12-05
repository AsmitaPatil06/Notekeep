import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {
  allArchiveNote: any;
  ANote: Object;

  constructor(private ES:CommonService) { }

  ngOnInit(): void {

    this.getLatestArchiveNote();
  }
  getLatestArchiveNote() {

    this.ES.getAllArchiveNote().subscribe((response) => {

      this.ANote = response;
    })
  }
  Unarchive(an){

    
    this.ES.Unarchive(an).subscribe((res)=>{

      this.ANote=res;
    })
  }
  DeleteArchive(an){

    this.ES.deleteArchiveNote(an.id).subscribe(()=>
    {
      this.getLatestArchiveNote();
    })
  }
  // copy(an){
  //    this.ES.makeCopy(an).subscribe(()=>{

  //     this.getLatestArchiveNote();
  //    })

 // }
 
 
}
