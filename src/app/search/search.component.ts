
import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';
import { Observable } from 'rxjs';
import { SearchDirection } from './search-direction';
import { FormGroup, FormBuilder } from "@angular/forms";
import { MatListModule } from '@angular/material/list'; 

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SearchComponent implements OnInit {
  
  options: FormGroup;
  searchText: string = "";
  categories: string[] = ['Drinks', 'Breakfast', 'Lunch', 'Dinner', 'Brunch', 'Appetizers', 'Dessert'];
  @Input() searchTemplateRef: any;
  @Input() duration: number = 0.25;
  @Input() navWidth: number = window.innerWidth;
  @Input() direction: SearchDirection = SearchDirection.Left;
  

  showSearch: Observable<boolean> = new Observable<boolean>();



  constructor(public fb: FormBuilder, private navService: NavigationService) {
    this.options = this.fb.group({
      category: [''],
      picture: [''],
      description: ['']
  })}


  /* Reactive form */
  

 ngOnInit(): void {
    this.reactiveForm();
    this.showSearch = this.navService.getShowNav();
  }

reactiveForm() {
    this.options = this.fb.group({
      category: [''],
      picture: [''],
      description: ['']
  })
}

onKeypressEvent(event: ){
  this.searchText = event.target.value$;
}

  onSidebarClose() {
    this.navService.setShowNav(false);
  }

  getSideNavBarStyle(showNav: boolean) {
    let navBarStyle: any = {};
    
    navBarStyle.transition = this.direction + ' ' + this.duration + 's, visibility ' + this.duration + 's';
    navBarStyle.width = this.navWidth + 'px';
    navBarStyle[this.direction] = (showNav ? 0 : (this.navWidth * -1)) + 'px';
    
    return navBarStyle;
  }
}
