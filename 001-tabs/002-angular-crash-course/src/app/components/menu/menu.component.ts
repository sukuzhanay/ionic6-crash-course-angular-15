import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu_routes =[
    {
      name : 'Home',
      path : '/home'
    },
    {
      name : 'About',
      path : '/about'
    },
    {
      name : 'Contact',
      path : '/contact'
    }
  ];

  constructor() {}

  ngOnInit(): void {
  }

}
