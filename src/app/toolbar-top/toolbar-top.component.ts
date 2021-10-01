import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';




@Component({
  selector: 'toolbar-top',
  templateUrl: './toolbar-top.component.html',
  styleUrls: ['./toolbar-top.component.css']
})

export class ToolbarTopComponent implements AfterViewInit {

  constructor() { }

  @ViewChild(NavBarComponent)
  sideNav!: NavBarComponent
  navVis = false;
  private navBar = new NavBarComponent();
  
  ngAfterViewInit(): void {
    this.navVis = false;
    this.sideNav = this.navBar;
  }


  public clickAdd(){
    
  }
  public toggleNav(){
    alert('search');
    this.sideNav.setVisible(true);
  }
}
