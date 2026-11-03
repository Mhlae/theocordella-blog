import { Component } from '@angular/core';
import { HeroComponent } from '../../hero.component';

@Component({
  selector: 'app-home-page',
  imports: [HeroComponent],
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class HomePage {}
