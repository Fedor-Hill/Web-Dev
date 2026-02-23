import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiURL = 'http://localhost:5000/api/data';

  constructor() {}

  async getData(queryURL: string): Promise<any> {
    try {
        const url = "https://kaspi.kz/shop/search/?text=%D1%81%D0%BC%D0%B0%D1%80%D1%82%D1%84%D0%BE%D0%BD&q=%3AavailableInZones%3AMagnum_ZONE1&sort=relevance&filteredByCategory=false&sc=";

        const response = await axios.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
                'Accept-Language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
                'Referer': 'https://kaspi.kz/',
                'Connection': 'keep-alive',
                'Cache-Control': 'max-age=0'
            }
        });

        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
  }
}

