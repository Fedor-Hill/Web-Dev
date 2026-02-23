import { Component, ViewChild, ElementRef } from '@angular/core';
import { DataService } from "../data.service";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  imports: [],
  templateUrl: './search.html',
  styleUrl: './search.css',
})

export class Search {
  @ViewChild('searchInput') searchInput!: ElementRef;
  inputText: string = '';
  queryText: string = '';
  data: any;
  constructor(private dataService: DataService) { }

  updateURL() {
    console.log("Update URL ------------------");

    this.queryText = 'https://kaspi.kz/shop/search/?text=' + encodeURIComponent(this.inputText);
    console.log("URL: " + this.queryText);
  }

  async fetchData() {
    this.updateURL();
    try {
      this.data = await this.dataService.getData(this.queryText);
      console.log('Fetched Data:', this.data);
    } catch (error) {
      console.error('Error while fetching data:', error);
    }
  }
}
