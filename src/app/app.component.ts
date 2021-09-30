import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NavBarComponent } from './nav-bar/nav-bar.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  @ViewChild(NavBarComponent)
  sideNav!: NavBarComponent
  
  
  ngAfterViewInit(): void {
    this.navVis = false;
    this.sideNav = this.navBar;
  }


  navVis = false;
  private navBar = new NavBarComponent();
  public clickAdd(){}
  public toggleNav(){
    alert('search');
    this.sideNav.setVisible(true);
  }
  title = 'recipe';
}
