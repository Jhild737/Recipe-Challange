import { MyCard } from './my-card';



export class CardFunctions{
 constructor (){}

 public cardList: Array<MyCard> = [];

 public addCard(ca: MyCard){
   this.cardList.push(ca);
 }

 public removeCard(index: number){
   this.cardList.splice(index, 1)
 }
}
