import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {DialogRef} from "@angular/cdk/dialog";
import {TrainService} from "../../Services/train.service";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {TrainListComponent as trnList} from "../train-list/train-list.component";

@Component({
  selector: 'app-train-form',
  templateUrl: './train-form.component.html',
  styleUrls: ['./train-form.component.scss']
})
export class TrainFormComponent {
  trnForm: FormGroup;

  constructor( private _fb:FormBuilder,private _dialogRef:DialogRef<TrainFormComponent>,private trainService:TrainService) {

    this.trnForm = this._fb.group({
      id:0,
      name:'',
      totalSeats:0,
      bookedSeats:0,
      startingPoint:'',
      boardingPoint:'',
      ticketAmount:0
    })
  }

   onFormSubmit() {
     if(this.trnForm.valid){
       this.trainService.addNewTrain(this.trnForm.value).subscribe({
         next: (value: any) => {
           alert('train added successfully')
           this._dialogRef.close()
         },
         error: (err: any) => {
           console.error(err)
         }
       }
     );
     }
   }
}
