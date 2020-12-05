import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Note } from '../models/note.model';
import { CommonService } from '../common.service';
import { HttpClient} from '@angular/common/http';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-input-note',
  templateUrl: './input-note.component.html',
  styleUrls: ['./input-note.component.css']
})
export class InputNoteComponent implements OnInit {
  

  previewPhoto=false;
  imgURL1=false;

  public selectedFile;
  public event1;
  imgURL: any;
  receivedImageData: any;
  base64Data: any;
  convertedImage: any;

  note:Note ={
    title:null,
    body:null,
    myimage:null
  }
  DS1: any;


  constructor(private cs:CommonService,private http:HttpClient) { }

  ngOnInit(): void {

  }

  // saveNote(){
  //   this.cs.save(this.note);
  //   console.log(this.note);
    
  // }
  DS: any;
  myimage1:any;
 saveNote():void{    //it pass data to json server
    
  this.cs.save(this.note,this.myimage).subscribe(
    (data:Note) =>{
        console.log(data);
        
    })
  //   const fd= new FormData();
  //   fd.append('img',this.myimage1,this.myimage1.name);
  // this.http.put<Note[]>("http://localhost:8004/notes.myimage",fd).subscribe(res=>{
  //   console.log(res);
  // });
    
 }
 

base64textString: string;

imgsrc: any;
imageUrl: any;
sFile: any;
//base64s
sString: string; 
//json
finalJson = {};
currentId: number = 0;



onChange($event: Event) {

  const file = ($event.target as HTMLInputElement).files[0];
  console.log(file);
  this.convertToBase64(file);


}
convertToBase64(file: File) {

  const observable = new Observable((subscriber: Subscriber<any>) => {
    this.readFile(file, subscriber);
  });

  observable.subscribe((d)=>{
     //  console.log(d);
       this.myimage=d;
       this.myimage1=d;

       console.log("hopppppppppppp",  this.myimage)
  });
}
  myimage(arg0: string, myimage: any) {
    throw new Error('Method not implemented.');
  }


readFile(file: File, subscriber: Subscriber<any>) {
  const filereader = new FileReader();
  filereader.readAsDataURL(file);

  filereader.onload = () => {
    subscriber.next(filereader.result);

    subscriber.complete();
  }
  filereader.onerror = (error) => {
    subscriber.error(error);
    subscriber.complete();
  };
}


  

}
