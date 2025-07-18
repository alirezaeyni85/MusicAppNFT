import {Component, computed, OnInit, Pipe, Signal, signal } from '@angular/core';
@Component({
  selector: 'app-mu-time-discount',
  imports: [],
  templateUrl: './mu-time-discount.component.html',
  styleUrl: './mu-time-discount.component.css'
})
export class MuTimeDiscountComponent implements OnInit  {


  public hour= signal(24);
  public minute=signal(59);
  public seconds = signal(59);

  public date = new Date()

ngOnInit(): void {
  this.hour.set(this.date.getHours())
  this.minute.set(this.date.getMinutes())
  this.seconds.set(this.date.getSeconds())
}
 
public timer = setInterval(()=>{
  this.seconds.update(num=>num -=1)
  if(this.seconds() <= 0){
    this.minute.update(num =>num-1)
    this.seconds.set(59)
  }else if(this.minute() <= 0){
    this.hour.update(num=>num-1)
    this.minute.set(59)
  }else if(this.hour()<= 0){
    this.hour.set(23)
  }
  
  

},1000)


}
