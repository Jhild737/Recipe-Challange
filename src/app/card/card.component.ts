import { Component, ViewChild, Input, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MyCard } from './my-card';
import { CardFunctions } from './cardFunctions';

import { MatIconModule } from '@angular/material/icon';
import { MatCard } from '@angular/material/card';
import  { OnInit } from '@angular/core';



@Component({
  selector: 'card-component',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  
})


export class CardComponent implements OnInit{
  constructor(private cardController: CardFunctions) {
    
  }

 // @ViewChild('cardtemplate') form!: ElementRef;
  public blankCard: MyCard[] = [{ name: '', description: 'coo', picURL: 'ng'}];
  
 public cards: Array<MyCard> = [{ name: 'pep', description: 'cool', picURL: 'looking'}, { name: 'pepuyuy', description: 'cool', picURL: 'looking'}];
  public lastCard: MyCard = this.blankCard[0];

  public count = 0;
  public returnIndex = -1;
  @Input() cardT = this.lastCard;
  
  public currentRender(ca: MyCard){
      this.cardT = ca;
  }

  public updateLastCard(card: MyCard){
    this.lastCard = card;
  }

  ngOnInit() {
    this.resetCards();
    this.count = 0;
  }

  public isInCards(card: MyCard): boolean{
    let same: boolean = false;
    let i = 0;
  for(let c of this.cards){
    if ((c.name === card.name) && (c.description === card.description) && (c.picURL === card.picURL)){
      this.returnIndex = i;
      return true;
    } else {
      i++;      
    }
  } 

   
    return false;
  }

  public addCard(card: MyCard){
     if (!this.isInCards(card)){
       this.cards.push(card);
     }
  }

  public deleteCard(card: MyCard): boolean{
    if (this.isInCards(card)){
      this.cards.splice(this.returnIndex, 1);
      return true;
    }
    else return false;
  }

  public resetCards(){
    this.cardController = new CardFunctions(this.blankCard);
    this.cards = this.blankCard;
    this.count = 0;
  }
  

  public getCards(): MyCard[]{
    return this.cards;
  }

  
   public clickSearch(){

   } 

   public getCount(): number{
     return this.count;
   }
  
   public clickAdd(ca: MyCard){
     
      alert(ca.name);
   }

  public recipeTitle(c: MyCard): string{
      
      return c.name;
  }
  
}
