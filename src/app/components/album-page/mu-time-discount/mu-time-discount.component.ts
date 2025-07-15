import {Component, OnInit, Pipe, signal } from '@angular/core';
@Component({
  selector: 'app-mu-time-discount',
  imports: [],
  templateUrl: './mu-time-discount.component.html',
  styleUrl: './mu-time-discount.component.css'
})
export class MuTimeDiscountComponent implements OnInit  {


  public hour:number= 59;
  public minute:number=59;
  public seconds = signal(59) ;
  public intervalId:any;

ngOnInit(): void {

}
 

}
