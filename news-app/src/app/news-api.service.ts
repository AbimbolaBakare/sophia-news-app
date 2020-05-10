import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  // Add your API key here
  api_key = '983e36f54a7e45c88189d4c19ac2ad7e';

  constructor(private http: HttpClient) { }

  // function to get list of all news sources
  initSources() {
     return this.http.get('https://newsapi.org/v2/sources?language=en&apiKey=' + this.api_key);
  }

  // function to get a list of headlines
  initArticles() {
   return this.http.get('https://newsapi.org/v2/top-headlines?country=ng&pageSize=15&apiKey=' + this.api_key);
  }

  // function to get a list of headlines for a user-selected source
  getArticlesByID(source: String) {
   return this.http.get('https://newsapi.org/v2/top-headlines?sources=' + source + '&apiKey=' + this.api_key);
  }
}
