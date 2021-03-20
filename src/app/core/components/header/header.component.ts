import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public collapse = true;
  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.collapse = !this.collapse;
  }
}
