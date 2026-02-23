import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sell',
  imports: [],
  templateUrl: './sell.html',
  styleUrl: './sell.css',
})
export class Sell implements OnInit {

  showText = true;
  randomDelayX = '0s';
  randomDelayY = '0s';

  ngOnInit() {
    this.checkSessionStatus();
    if (this.showText) { this.startIntro(); }
  }

  checkSessionStatus() {
    const sessionActive = sessionStorage.getItem('textShownInSession');

    if (sessionActive) {
      this.showText = false;
      this.randomDelayX = `-${(Math.random() * 5.3).toFixed(2)}s`;
      this.randomDelayY = `-${(Math.random() * 3.7).toFixed(2)}s`;


    }
  }

  startIntro() {
    setTimeout(() => {
      this.showText = false;
      sessionStorage.setItem('textShownInSession', 'true');
    }, 1000);
  }

}
