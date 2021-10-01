import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NavBarComponent } from './nav-bar/nav-bar.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void{

  }

  
  
  title = 'recipe';
}
