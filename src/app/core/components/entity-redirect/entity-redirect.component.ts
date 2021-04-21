import { HttpClient } from '@angular/common/http';
import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-entity-redirect',
  templateUrl: './entity-redirect.component.html',
  styleUrls: ['./entity-redirect.component.scss']
})
export class EntityRedirectComponent implements OnInit , OnDestroy, OnChanges {

  @Input() url ?: string ;
  @Input() urlToRedirect ?: string;
  public details:any = null;
  public subscription : Subscription;
  constructor(public http: HttpClient, private router: Router) {}
  ngOnChanges(changes: SimpleChanges): void {
    if(changes.url) {
      this.subscription = this.http.get(this.url).subscribe((res: any) => {
        this.details = res;
      });
    }
  }
  
  ngOnInit(): void { }
  
  ngOnDestroy(): void {
    this.subscription && this.subscription.unsubscribe();
  }

  public getId() {
    if(this.url && this.urlToRedirect) {
      return this.urlToRedirect +this.url.replace(/\D/g, '')
    } else {
      return null;
    }
  }

}
