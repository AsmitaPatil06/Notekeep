import { Injectable } from '@angular/core';
import { Note } from './models/note.model';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CommonService {


  constructor(private http:HttpClient) { }


  url='http://localhost:8004/notes';

//this Note which model 
  private listNote: Note[]=[

   {
    
     title: 'asmi',
     body: 'asmi',
    
    myimage:''
   }

  ];


  curruntData:Note={

    title: '',
    body: '',
   myimage:''
  }


getNotes(): Observable<Note[]> {
 
  return this.http.get<Note[]>("http://localhost:8004/notes");
}

getNotes1(id:number): Observable<Note[]>{
    
  return this.http.get<Note[]>(`${this.url}/${id}`);
 }
getId(){

    var lastElement=Note.length;

    console.log(lastElement);

 // return this.http.get<void[]>(lastElement);
}

//save Note
save(note:Note,img):Observable<Note>{
  console.log(note);
    return this.http.post<Note>("http://localhost:8004/notes",{"title":note.title, "body":note.body, "myimage":img});
    
    header: new HttpHeaders({
     'content-type' :'application/json'
  })
  }

   deleteNote(id:number):Observable<void>{
      return this.http.delete<void>("http://localhost:8004/notes/"+id); 
   }

   trash(an):Observable<Note>
   {
       return this.http.post<Note>("http://localhost:8004/trash",an);
   }

  // trash(an,img):Observable<Note>
  // {
  //    // return this.http.post<Note>("http://localhost:8004/trash",an);
  //    return this.http.post<Note>("http://localhost:8004/trash",{"title":an.title, "body":an.body, "myimage":img});
  // }

  getTrashNotes(): Observable<Note[]> {
 
    return this.http.get<Note[]>("http://localhost:8004/trash");
  }
  deleteTrashNote(id:number):Observable<void>{
    return this.http.delete<void>("http://localhost:8004/trash/"+id); 
 }
 getTrashNotesAgain(notes1): Observable<Note[]> {
 
  return this.http.post<Note[]>("http://localhost:8004/notes",notes1);
}

  archive(note){
    return this.http.post("http://localhost:8004/archive", note); 
  }
  getAllArchiveNote(){
    return this.http.get("http://localhost:8004/archive")
  }

  Unarchive(notes1): Observable<Note[]>{
    return this.http.post<Note[]>("http://localhost:8004/notes",notes1);
  }
  deleteArchiveNote(id:number):Observable<void>{
    return this.http.delete<void>("http://localhost:8004/archive/"+id); 
    
 }
 
 makeCopy(note,id):Observable<Note>{

  console.log("copy value",note ,+id)
  return this.http.put<Note>("http://localhost:8004/notes/"+id+1, note); 

  
}
// makeCopy(note):Observable<Note>{
//   return this.http.put<Note>("http://localhost:8004/notes/", note); 
// }

}
