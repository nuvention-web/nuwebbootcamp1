import { Component } from '@angular/core';
import { GitIdInfo } from './github-id';
import { GitIdInfoService } from './git-id-info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Favorite Github Users and Orgs';
  ghId = '';
  ghIds: GitIdInfo[] = [];
  constructor(private ids: GitIdInfoService) { }

  addGhId(toadd: string) {
    const newid = this.ids.GetGitIdInfo(toadd);
    this.ghIds.push(newid);
    this.ghId = '';
  }
}
