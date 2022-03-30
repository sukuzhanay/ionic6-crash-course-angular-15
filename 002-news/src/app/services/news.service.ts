import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getTopNews(){
    return this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=a7169ca270f543c79e7bd8f49a513035')
  }

}
 