import { Component, OnInit } from '@angular/core';
import { RssServiceService } from '../rss-service.service'

@Component({
  selector: 'app-rss-feed',
  templateUrl: './rss-feed.component.html',
  styleUrls: ['./rss-feed.component.css']
})
export class RssFeedComponent implements OnInit {
  data;
  private feeds: any;
  constructor(private rssService:RssServiceService) { }

  ngOnInit() {
    console.log(this.rssService.getFeedContent());
  }
  }


