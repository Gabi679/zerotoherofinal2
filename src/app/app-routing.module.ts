import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { RssFeedComponent } from './rss-feed/rss-feed.component';

const routes: Routes =  [{
        path: '',
        redirectTo: 'toolbar',
        pathMatch: 'full'
      },
      {
        path: 'toolbar',
        component: ToolbarComponent,
        pathMatch: 'full',
      },
      {
        path: 'rss',
        component: RssFeedComponent,
        pathMatch: 'full',
      }
      ];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}