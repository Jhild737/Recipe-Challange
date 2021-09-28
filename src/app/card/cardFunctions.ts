import { MyCard } from './my-card';



export class CardFunctions{
  public cardList: Array<MyCard> = [];
  constructor (list: Array<MyCard>){
    this.cardList = list;
 }

 

 public addCard(ca: MyCard){
   this.cardList.push(ca);
 }

 public removeCard(index: number){
   this.cardList.splice(index, 1)
 }
}
