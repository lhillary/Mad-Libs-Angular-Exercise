import { Component } from '@angular/core';
import { NonNullAssert } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Mad Libs';
  noun:string = null;
  adverb:string = null;
}
