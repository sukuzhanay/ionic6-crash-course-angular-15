import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
const apiKey = environment.apiKey;
@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getTopNews(){
    return this.http.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch`,{
      params :{
        apiKey : apiKey
      }
    })
  } 
}
 