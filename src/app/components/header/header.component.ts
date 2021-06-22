import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  public folder: string;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    if (this.activatedRoute.snapshot.parent.url.length > 1) {
      this.folder = this.activatedRoute.snapshot.parent.url[1].path.replace('-', ' ');
    } else if (this.activatedRoute.snapshot.parent.url.length == 1) {
      this.folder = this.activatedRoute.snapshot.parent.url[0].path.replace('-', ' ');
    }
  }

}
