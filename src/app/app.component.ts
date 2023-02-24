import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-text-search-highlight';
  searchText = '';
  characters = [
    'Andorra',
    'Belgium',
    'China',
    'Denmark',
    'Egypt',
    'France',
    'Georgia',
    'Hong Kong',
    'India',
    'Japan',
    'Kenya'
  ]
}