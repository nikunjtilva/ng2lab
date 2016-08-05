import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail/hero-detail.component'
import { HeroService } from './hero.service'
@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: ['heroes.component.css'],
  directives: [HeroDetailComponent],
  providers: [HeroService]
})

export class HeroesComponent implements OnInit {
  constructor(
    private router: Router,
  private heroService: HeroService) { }
  ngOnInit() {
    this.getHeroes();
  }
  title = 'Tour of Heroes!';
  selectedHero: Hero;
  heroes: Hero[];
  
  getHeroes() {
    //this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
    
  }
  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
  gotoDetail(){
 this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
