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
public pageEvent: PageEvent = new PageEvent(); //one possible way to pass event data.
public cardCount: number = 0;
public currentCard: MyCard = this.cardHolder.blankCard[0];
public pgIndex = 0; //track the current opened card
public unchanged: boolean = true; //need to stop duplicates from being posted
public dataSource = new MatTableDataSource<MyCard>(this.cardHolder.getCards()); 
  //Update local card data from cardHolder. Data should be processed in CardComponent class.
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

  

  //Event: add new recipe symbol clicked. Need to add view change to this.
  public clickPlus(){
    alert('Card pops up with form to submit some info');    
   }
  //Todo: make list + search function to search for which meal the recipe belongs to. Add meal as an attribute for My card.
   public clickSearch(){
    alert('search page pops out from side');
   
   }
 
  }  
  
