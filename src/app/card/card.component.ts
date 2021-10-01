import { Component, OnInit } from '@angular/core';
import { MyCard } from './my-card';
import { CardFunctions } from './cardFunctions';


@Component({
  selector: 'card-component',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  
})


export class CardComponent{
  constructor() {  }


  
 public cards: MyCard[] = [{ name: 'pep', description: 'cool', category: 'looking'}, { name: 'pepuyuy', description: 'cool', category: 'looking'}];
  public cardController: CardFunctions = new CardFunctions(this.cards);

  public index: number = CardFunctions.length - 1;
 
 // @Input() cardT=  this.cards[this.index];
  
  

  
   public clickSearch(){

   }
  
   public clickAdd(ca: MyCard){
     
      alert(ca.name);
   }

  public recipeTitle(c: MyCard): string{
      
      return c.name;
  }
  
}