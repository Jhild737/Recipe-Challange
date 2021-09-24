import { Component, OnInit } from '@angular/core';

class myCard{
  constructor(public name: string, public imageURL: string, public description: string) {}
}


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
