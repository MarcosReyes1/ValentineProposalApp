import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-component',
  imports: [],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
})
export class HomeComponent {
  noButtonSize = 15;
  noButtonText = 'No :(';
  counter = 0;
  noPhrases = ['Are you sure?', 'PLEEEEASSSEEE', 'Tell me whyyy', 'I will kms >:(',
    'Please say yes', 'Just vote', 'Ur kidding me', 'How does he do it', 'Why have\'t you clicked yes???'
  ]

  constructor(private router: Router) {}

  onYesClick() {
    this.router.navigate(['/yes']);
  }

  increaseSize() {
    if (this.noButtonSize < 100) {
      this.noButtonSize += 10;
    }
    if (this.counter < this.noPhrases.length) {
      this.noButtonText = this.noPhrases[this.counter];
      this.counter++;
    }
  }
}
