import { Component, signal } from '@angular/core';
import { Search } from "./search/search";
import { Cards } from "./cards/cards";
// import { RouterOutlet } from '@angular/router';
// import { ParserService } from "./kaspi.ts";

@Component({
  selector: 'app-root',
  imports: [Search, Cards],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tem-shop');
  url = "";
  // constructor(private parserService: ParserService) {}
  fetchData() {
    console.log("fetchData");
  }
}
