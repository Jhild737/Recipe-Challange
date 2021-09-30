
import { Component, OnInit, ViewEncapsulation, Input, Directive } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  encapsulation: ViewEncapsulation.None
})


export class SearchComponent implements OnInit {
  
  @Directive({selector: 'search'})
  @Input() searchText!: string;

   

  showSearch: Observable<boolean> = new Observable<boolean>();



  constructor() {
    this.searchText = "";
   }


  /* Reactive form */
  onKeyPressEvent(){
    
  }

 ngOnInit(): void {
        
  }




  onSidebarClose() {
   
  }

  
}
