import { AfterViewInit, Component, Directive, ElementRef, TemplateRef, ViewChild } from '@angular/core';
import { SearchComponent } from '../search/search.component';


@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

/*export class navCompDirective{
  @Directive({
    selector: 'navComp'
  })
  searchText: string = '';
}*/



export class NavBarComponent implements AfterViewInit {

  

  @ViewChild(SearchComponent)  
  searchC!: SearchComponent;

  searchText: string;
  categories: string[] = ['Drinks', 'Breakfast', 'Lunch', 'Dinner', 'Brunch', 'Appetizers', 'Dessert'];
  navVisible = false;
  
  
  constructor() {
    
    this.searchText = "";
  }

  public setVisible(visible: boolean){
    this.navVisible = visible;

  }

  public isVisible(): boolean{
    return this.navVisible;
  }

  public onKeyPressEvent(){
    
  }

  ngAfterViewInit(): void {
    
  }

}
