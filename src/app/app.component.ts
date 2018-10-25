import { Component, OnInit, Pipe } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})


export class TaskComponent implements OnInit {
  textarray: string[] = [];
  isboolean = true;
  birthday=new Date(1997,3,13);
  title="akshita";

  constructor() {

  }
  ngOnInit() {

  }
  add(name: string):void {

    console.log(name);

    this.textarray.push(name);
  }
}
