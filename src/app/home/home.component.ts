//this is a by-default statement. 
//This is angular's way of importing files, like header files in C/C++. 
//Currently importing Component and OnInit files.

import { Component, OnInit } from '@angular/core';  

//Decorator
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

//nothing but a simple class
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
