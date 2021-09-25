import { Attribute, Component, OnInit } from '@angular/core';
import { CardComponent } from './card/card.component';
import { MyCard } from './card/my-card';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

    
})




export class AppComponent implements OnInit{


public cards: MyCard[] = this.cardHolder.cards;
public currentCard?: MyCard = this.cards[0];
public count: number = 0;
pageSizeOptions: number[] = [5, 10, 25, 100];
constructor(private cardHolder: CardComponent = new CardComponent()){
  if (!this.currentCard){
    this.currentCard = { name: '', description: '', picURL: ''}
  }
}
  
  public updateData(){
    if (this.cardHolder.cards.length > (this.count + 1)){
      alert( this.count);
      this.count = this.cardHolder.cards.length;
      this.cards = this.cardHolder.cards;
    }
  }

  ngOnInit() {
    this.resetCards();
    this.count = 0;
  }

  public resetCards(){
    this.cardHolder = new CardComponent();
    this.count = 0;
  }

  public clickPlus(){
    alert('Card pops up with form to submit some info');    
   }

   public clickSearch(){
    alert('search page pops out from side');
   
   }

  }  
  
