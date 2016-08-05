import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../hero';
import { HeroService } from '../hero.service'
@Component({
  moduleId: module.id,
  selector: 'my-hero-detail',
  templateUrl: 'hero-detail.component.html',
  styleUrls: ['hero-detail.component.css'],
  providers: [HeroService]
})
export class HeroDetailComponent implements OnInit, OnDestroy {

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute
  ) { }

  sub: any;
  hero: Hero;

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = +params['id'];
      this.heroService.getHero(id).then(hero => this.hero = hero);
    });

  }

  goBack() {
    window.history.back();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }




}
