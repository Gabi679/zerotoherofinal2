import { Component, OnInit } from '@angular/core';
import { RssServiceService } from '../rss-service.service'

@Component({
  selector: 'app-rss-feed',
  templateUrl: './rss-feed.component.html',
  styleUrls: ['./rss-feed.component.css']
})
export class RssFeedComponent implements OnInit {
  hasData=false;
  data;
  private feeds: any;
  constructor(private rssService:RssServiceService) { }

  ngOnInit() {
    
  }
  load(){
    this.data=this.rssService.getFeedContent();
    this.hasData=true;
  }
  }


