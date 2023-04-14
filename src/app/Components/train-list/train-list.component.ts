//import { Component } from '@angular/core';
import {TrainService} from "../../Services/train.service";
import {Train} from "../../Models/train";
import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-train-list',
  templateUrl: './train-list.component.html',
  styleUrls: ['./train-list.component.scss']
})
export class TrainListComponent implements OnInit{
  trains!:Train[];


  ngOnInit(): void {
    this.getTrainsFromService();
  }

  constructor(private _trainService:TrainService) {}

  public getTrainsFromService(){
    this._trainService.getTrains().subscribe({
      next :(res)=>{
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log(res)
      },
      error:(err)=>{
        console.error(err)
      }
    })

  }


  displayedColumns: string[] = ['id', 'name', 'totalSeats','bookedSeats','startingPoint','boardingPoint','ticketAmount'];
  dataSource !: MatTableDataSource<Train>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}


