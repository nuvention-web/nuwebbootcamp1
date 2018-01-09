import { Component } from '@angular/core';
import { GitIdInfo } from './github-id';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Favorite Github Users and Orgs';
  ghId = '';
  ghIds: GitIdInfo[] = [];
  addGhId(toadd: string) {
      this.ghIds.push({login: toadd, favorite: false});
      this.ghId = '';
  }
}
