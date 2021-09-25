import { Attribute, Component, AfterViewInit, ViewChild } from '@angular/core';
import { CardComponent } from './card/card.component';
import { MatTableDataSource } from '@angular/material/table';
import { MyCard } from './card/my-card';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

    
})




export class AppComponent implements AfterViewInit{
constructor(private cardHolder: CardComponent){
  
}
public pageEvent: PageEvent = new PageEvent();
public cardCount: number = 0;
public currentCard: MyCard = this.cardHolder.blankCard[0];
public pgIndex = 0;
public unchanged: boolean = true;
public dataSource = new MatTableDataSource<MyCard>(this.cardHolder.getCards());
  
   public updateData(){
    
     if (!pa){return pa} else {
    if (this.cardHolder.cards.length > (this.cardCount + 1)){
      alert( this.cardCount);
      this.cardCount = this.cardHolder.getCount();
      this.currentCard = this.cardHolder.cardT;
      this.unchanged = false;
    }
  }    
  return pa;
  }

  

 
  public clickPlus(){
    alert('Card pops up with form to submit some info');    
   }

   public clickSearch(){
    alert('search page pops out from side');
   
   }
 
  }  
  
