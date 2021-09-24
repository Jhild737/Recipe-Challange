import { Component, OnInit } from '@angular/core';
import { CardTemp } from '../card-template';

@Component({
  selector: 'app-card-template',
  templateUrl: './card-template.component.html',
  styleUrls: ['./card-template.component.css']
})
export class CardTemplateComponent implements OnInit {

  recipe: CardTemp = {
    title: "title",
    description: "description",
    imageLocation: "fileLocation"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
