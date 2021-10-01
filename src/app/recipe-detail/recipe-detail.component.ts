import { Component, OnInit } from '@angular/core';
import { MyCard } from '../card/my-card';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  display: MyCard;
  constructor(card: MyCard) { this.display = card}



  ngOnInit(): void {
    
  }


}
