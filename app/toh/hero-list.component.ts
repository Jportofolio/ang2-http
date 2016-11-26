
// Observable version
import { Component, OnInit } from '@angular/core';
import { HeroService } from './hero.service';
import { Hero, UserLogin } from './hero';

// import { LocalStorageService } from 'angular-2-local-storage';

@Component({
  moduleId: module.id,
  selector: 'hero-list',
  templateUrl: 'hero-list.component.html',
  providers: [HeroService],
  styleUrls: ['hero-list.component.css']
})

export class HeroListComponent implements OnInit {
    errorMessage: string;
    heroes: Hero [];
    hero : Hero;
    user: UserLogin;
    Token: UserLogin [];
    mode = 'Observable';

    constructor(private heroService: HeroService) { }

    ngOnInit() { 
         this.getHeroes();
    }

    settingToken(k, v){ 
           localStorage.setItem(k,v.id_token);
           
         console.log(k + ' ' + v.id_token)
     }
     Logout(){
            // localStorage.removeItem('jwt');
            this.getHeroes();
     }
    getHeroes(){
        this.heroService.getHeroes()
                        .subscribe(
                            heroes => this.heroes = heroes,
                            error => this.errorMessage = <any>error
                        );
    }
    addHero(hero: Hero) {
        if (!hero) { return; }
        this.heroService.addHero(hero)
                        .subscribe(
                           k => this.settingToken('jwt', k),
                            error => this.errorMessage = <any>error)
        // console.log(hero);
        
    }
    LogHero(user: UserLogin){
        if (!user) { return;}
        this.heroService.LogHero(user)
                        .subscribe(
                            x => this.settingToken('jwt', x),
                            error => this.errorMessage = <any>error);
    }
}