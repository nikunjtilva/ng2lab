import { Component, OnInit } from '@angular/core';
import { HeroService } from './hero.service';
import { ROUTER_DIRECTIVES } from '@angular/router'
@Component({
    moduleId: module.id,
    selector: 'my-app',
    template:`
    <h1>{{title}}</h1>
  <nav>
    <a [routerLink]="['/dashboard']" routerLinkActive="active">Dashboard</a>
    <a [routerLink]="['/heroes']" routerLinkActive="active">Heroes</a>
  </nav>
  <router-outlet></router-outlet>
    `,
    directives:[ROUTER_DIRECTIVES]
})
export class AppComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

    title = "Tour of Heroes";

}