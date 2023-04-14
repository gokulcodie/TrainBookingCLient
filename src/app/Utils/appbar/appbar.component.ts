import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {TrainFormComponent} from "../../Components/train-form/train-form.component";

@Component({
  selector: 'app-appbar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.scss']
})
export class AppbarComponent {
  constructor(private dialog:MatDialog) {
  }

  openTrainForm(){
    this.dialog.open(TrainFormComponent);
  }
}
