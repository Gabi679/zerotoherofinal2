import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Feed } from './model/feed';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RssServiceService {

  private rssToJsonServiceBaseUrl: string = 'https://rss2json.com/api.json?rss_url=';

  constructor(private http: Http) { }

  getFeedContent() {
    this.http.get(this.rssToJsonServiceBaseUrl + 'https://www.theverge.com/rss/index.xml').subscribe((data)=>{
      let data2=this.extractFeeds(data);
      return data2;
    })
  }

  extractFeeds(res: Response): Feed {
    let feed = res.json();
    return feed || { };
  }

}
