import { AfterViewInit, Component, ElementRef, inject, OnInit, QueryList, signal, ViewChildren } from '@angular/core';
import { MuInfoCreatorsService } from '../../../../service/artists/mu-info-creators.service';
import { debounceTime, fromEvent, map, tap } from 'rxjs'

@Component({
  selector: 'app-mu-main-content-creators',
  imports: [],
  templateUrl: './mu-main-content-creators.component.html',
  styleUrl: './mu-main-content-creators.component.css'
})
export class MuMainContentCreatorsComponent implements OnInit ,AfterViewInit{
  // *Get Creators From Service*
  public artistsCreators = signal( inject(MuInfoCreatorsService).infoCreators);
  public copyOfCreators = inject(MuInfoCreatorsService).infoCreators
  // *ViewChildren For Btns* 
  @ViewChildren('btnHistory') btns!:QueryList<ElementRef>;
  // *Array Of Change MusicSold* 
  public arrayOfSoldMusic:any[] = [];
  
ngOnInit(): void {

  // *Sorting Creators*
this.artistsCreators.set(this.artistsCreators().sort((firstItem,secondItem)=>{
  return Number(firstItem.soldMusic) - Number(secondItem.soldMusic)
}).reverse())


   console.log(this.arrayOfSoldMusic)
   // *Push in ArrayOfSoldMusic*
  this.arrayOfSoldMusic.push(this.artistsCreators().map((item:any)=>{
   return {id:item.id, change:item.update, volume:item.volume ,soldMusic:item.soldMusic }
  }))

}

ngAfterViewInit(): void {

   // *Append ClickEvent On Btns*
  setTimeout(()=>{
  this.btns.forEach((btn)=>{
  fromEvent(btn.nativeElement,'click').pipe(
    debounceTime(500),
    map(()=> (btn.nativeElement as HTMLElement).innerText),
  map((i)=> this.getHistoryOfChange(i)),
  ).subscribe()})},10)
}


  // *Call CalculateFunction with Condition*
public getHistoryOfChange(history:string){
  switch (history) {
    case "This Week":
      this.calculateSoldMusic(7)
      break;
      case "This Month":this.calculateSoldMusic(30) 
      break
      case "All Time": this.calculateSoldMusic(365)
      break
      case "Today":this.calculateSoldMusic(1)
      break
    default:
      break;}
}




// *Calculate MusicSold Function*
calculateSoldMusic(day:number){

const calculatedChange = this.artistsCreators().map((artist)=>{
      const calculated = this.arrayOfSoldMusic[0].find((item: any)=> item.id == artist.id)
      artist.soldMusic = Number((calculated.soldMusic *day).toFixed(2))
      artist.update = Number((calculated.change *day).toFixed(2))
      artist.volume = Number((calculated.volume *day).toFixed(2))
  return artist
  })
  
  return this.artistsCreators.set(calculatedChange)
}




}
