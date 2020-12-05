import { Component, OnInit } from '@angular/core';
import { CommonService } from  '../common.service';

@Component({
  selector: 'app-edit-card',
  templateUrl: './edit-card.component.html',
  styleUrls: ['./edit-card.component.css']
})
export class EditCardComponent implements OnInit {

  constructor(public cs:CommonService) { }

  ngOnInit(): void {

  }



  // edit(emp){

  //   this.cs.curruntData=Object.assign({},emp);
   
  //  }

//  update(curruntData){
 
//    console.log(curruntData);
//  this.cs.update(curruntData,this.myimage).subscribe((res)=>{
  
//     this.i=res;
 
//       console.log(this.i);
//  });
 
//  }

}
