import { Attribute, Component } from '@angular/core';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

    
})


export class AppComponent {
 public shown = false;
  title = 'recipe';
  cardList = new CardComponent();
  public clickPlus(){
    alert('hii');
    this.shown = true
   }
}
