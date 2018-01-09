import { Component, OnInit, Input } from '@angular/core';
import { GitIdInfo } from '../github-id';

@Component({
  selector: 'app-id-list',
  templateUrl: './id-list.component.html',
  styleUrls: ['./id-list.component.css']
})
export class IdListComponent implements OnInit {

  ghIds: GitIdInfo[] = [];
  @Input() idlist: GitIdInfo[];
  constructor() { }

  toggleFavorite(favid: GitIdInfo) {
    favid.favorite = !favid.favorite;
  }
  ngOnInit() {
  }

}
