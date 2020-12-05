import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import {FormControl} from '@angular/forms';
// import { MAT_DIALOG_DATA } from '@angular/material';
// import { MatDialog, MatDialogConfig } from '@angular/material';
import {MatDialog} from '@angular/material/dialog';
import { InputNoteComponent } from '../input-note/input-note.component';
import { EditCardComponent } from '../edit-card/edit-card.component';


// import { ColorPickerComponent } from '@syncfusion/ej2-angular-inputs';
// import { SplitButtonComponent } from '@syncfusion/ej2-angular-splitbuttons';


@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.css']
})
export class ReminderComponent implements OnInit {
  myimage: any;


  // @ViewChild("palette")
  // public palette: ColorPickerComponent;
  // @ViewChild("splitbtn")
  // public splitBtn: SplitButtonComponent;

  // public customColors: { [key: string]: string[] } = {
  //     'custom': ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#2196f3', '#03a9f4', '#00bcd4',
  //         '#009688', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107']
  // };

  // public column: number = 4;

  // public preview: HTMLElement;

  // public beforeRender(args: any): void {
  //     args.element.classList.add('e-custom-tile');
  // }

  // public noColorClicked(args: any): void {
  //     //sets color picker value property to null
  //     this.palette.setProperties({ 'value': "" }, true);
  //     (document.querySelector('.e-split-btn .e-picker-icon') as HTMLElement).style.borderBottomColor = "transparent";
  //     this.preview.textContent = "No color"
  //     this.preview.style.backgroundColor = "transparent";
  // }

  // // Triggers while color value changes.
  // public onChange(args: any): void {
  //     (document.querySelector(".e-split-btn .e-picker-icon") as HTMLElement).style.borderBottomColor = args.currentValue.hex;
  //     this.preview.style.backgroundColor = args.currentValue.hex;
  //     this.preview.textContent = args.currentValue.hex;
  //     if (this.splitBtn.element.getAttribute("aria-expanded")) {
  //         this.splitBtn.toggle();
  //         this.splitBtn.element.focus();
  //     }
  // }


  
  constructor(public dialog: MatDialog) { }

  

  ngOnInit(): void {

   // this.preview = document.getElementById('preview');
   // this.preview.style.backgroundColor = "#f44336";
   // this.preview.textContent = "#f44336";
  }

 




  
}
  






