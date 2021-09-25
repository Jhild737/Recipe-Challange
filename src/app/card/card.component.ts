import { Component, ViewChild, Input, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MyCard } from './my-card';
import {CardFunctions} from './cardFunctions';

import { MatIconModule } from '@angular/material/icon';
import { MatCard } from '@angular/material/card';



@Component({
  selector: 'card-component',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  
})


export class CardComponent{
  constructor() {  }
 @Input() c!: MyCard;
  @ViewChild('cardtemplate') form!: ElementRef;
  
 public cards: MyCard[] = [{ name: 'pep', description: 'cool', picURL: 'looking'}, { name: 'pepuyuy', description: 'cool', picURL: 'looking'}];
  public cardController: CardFunctions = new CardFunctions(this.cards);

  public index: number = CardFunctions.length - 1;
 
  @Input() cardT=  this.cards[this.index];
  
  public currentRender(ca: MyCard){
      this.cardT = ca;
  }

  
   public clickSearch(){

   }
  
   public clickAdd(ca: MyCard){
     
      alert(ca.name);
   }

  public recipeTitle(c: MyCard): string{
      
      return c.name;
  }
  
}
