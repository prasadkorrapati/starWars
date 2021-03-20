import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entity-redirect',
  templateUrl: './entity-redirect.component.html',
  styleUrls: ['./entity-redirect.component.scss']
})
export class EntityRedirectComponent implements OnInit {

  @Input() url ?: string ;
  @Input() urlToRedirect ?: string;
  public details:any = null;
  constructor(public http: HttpClient, private router: Router) {
    
   }
  ngOnChanges(changes: SimpleChanges): void {
    if(this.url)
      this.http.get(this.url).subscribe((res: any) => {
        this.details = res;
      });
  }

  ngOnInit(): void { }

  public getId() {
    if(this.url && this.urlToRedirect) {
      return this.urlToRedirect +this.url.replace(/\D/g, '')
    } else {
      return null;
    }
  }

}
