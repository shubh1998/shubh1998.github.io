import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxTypedJsComponent } from 'ngx-typed-js';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  @ViewChild(NgxTypedJsComponent, { static: true }) typed: NgxTypedJsComponent;


  constructor() { }

  ngOnInit(): void {
  }

}
