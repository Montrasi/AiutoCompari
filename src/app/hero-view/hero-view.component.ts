import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-view',
  templateUrl: './hero-view.component.html',
  styleUrls: ['./hero-view.component.css']
})
export class HeroViewComponent implements OnInit {

  constructor() { }
  
  voteUp():Boolean { 
    this.heros.superLivello ++;
    return false; 
  }
  voteDown():Boolean{
      this.heros.superLivello --;
      return false; 
  }
  

  ngOnInit() {
  }
  
  @Input() heros: Hero;

}
