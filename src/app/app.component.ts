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
public cards: CardComponent = new CardComponent()
  title = 'recipe';
  
  public clickPlus(){
    alert('Card pops up with form to submit some info');    
   }

   public clickSearch(){
    alert('search page pops out from side');
    this.shown = true
   }

  }  
  
