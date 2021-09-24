import { Attribute, Component } from '@angular/core';
import { CardComponent } from './card/card.component';
import { MyCard } from './card/my-card';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

    
})




export class AppComponent {
  
  
 public shown = false;
public cardHolder: CardComponent = new CardComponent();
public cards: MyCard[] = this.cardHolder.cards;
public count: number = 0;
  title = 'recipe';
  
  public checkForNewCards(){
    if (this.cardHolder.cards.length > (this.count + 1)){
      this.count = this.cardHolder.cards.length;
      this.cards = this.cardHolder.cards;
    }
  }

  public currentCards(card: MyCard){
    this.cardHolder.currentRender(card);
  }


  public clickPlus(){
    alert('Card pops up with form to submit some info');    
   }

   public clickSearch(){
    alert('search page pops out from side');
    this.shown = true
   }

  }  
  
