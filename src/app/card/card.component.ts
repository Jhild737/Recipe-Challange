import { Component, ViewChild, Input, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';

import { MyCard } from './my-card';
import {CardFunctions} from './cardFunctions';





@Component({
  selector: 'card-component',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  
})


export class CardComponent{
  @Input() c!: MyCard;
  @ViewChild('cardtemplate') form!: ElementRef;
  cardController: CardFunctions = new CardFunctions;

  public currentCard: MyCard = { name: 'pep', description: 'cool', picURL: 'looking'};
  public index: number = 0;
  constructor() {         
      
   }

  
  
  public recipeTitle(c: MyCard): string{
      
      return c.name;
  }
  
}
