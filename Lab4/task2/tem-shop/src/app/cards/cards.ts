import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Product, PRODUCTS } from '../products/kaspi';
import { CommonModule } from '@angular/common';
import { Sell } from "../sell/sell";

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule, Sell],
  templateUrl: './cards.html',
  styleUrl: './cards.css',
})
export class Cards implements OnInit {
  products: Product[] = [];

  @ViewChild('carousel', { static: false }) carousel!: ElementRef;
  @ViewChild('bgAudio') audioPlayer!: ElementRef<HTMLAudioElement>;

  currentView: 'buy' | 'sell' | 'talk' | 'exit' = 'buy';
  menuActions = ['buy', 'sell', 'talk', 'exit'];

  focusedIndex = 0;
  productIndex = 0;

  ngOnInit() {
    this.products = PRODUCTS;
    const startMusic = () => {
      this.playMusic();
      document.removeEventListener('click', startMusic);
    };
    document.addEventListener('click', startMusic);
  }

  playMusic() {
    const audio = this.audioPlayer.nativeElement;
    audio.volume = 0.3;
    audio.play().catch(err => console.log("Err:", err));
  }

  pauseMusic() {
    const audio = this.audioPlayer.nativeElement;
    audio.pause();
    audio.currentTime = 0;
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      this.focusedIndex = (this.focusedIndex + 1) % this.menuActions.length;
      this.autoTrigger();
      this.musicTrigger(this.focusedIndex);
    }
    else if (event.key === 'ArrowUp') {
      event.preventDefault();
      this.focusedIndex = (this.focusedIndex - 1 + this.menuActions.length) % this.menuActions.length;
      this.autoTrigger();
      this.musicTrigger(this.focusedIndex);
    }

    else if (event.key === 'Enter') {
      const action = this.menuActions[this.focusedIndex];
      this.triggerAction(action);

    }

    else if (this.currentView === 'buy') {
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        if (this.productIndex < this.products.length - 1) {
          this.productIndex++;
          this.scrollToActiveProduct();
        }
        this.musicTrigger(this.focusedIndex);
      }
      else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        if (this.productIndex > 0) {
          this.productIndex--;
          this.scrollToActiveProduct();
        }
        this.musicTrigger(this.focusedIndex);
      }
    }
  }

  musicTrigger(index: number) {
    console.log("MUSIC TRIGGER");
    if (index == 0) {
      this.playMusic();
      return; 
    }

    this.pauseMusic();
  }

  autoTrigger() {
    const currentAction = this.menuActions[this.focusedIndex];
    this.triggerAction(currentAction);
  }

  // Метод для выполнения действия
  triggerAction(action: string) {
    if (action === 'buy') this.currentView = 'buy';
    if (action === 'sell') this.currentView = 'sell';
    if (action === 'talk') this.currentView = 'talk';
    if (action === 'exit') this.currentView = 'exit';
  }

  scroll(direction: number) {
    const container = this.carousel.nativeElement;
    const scrollAmount = 305;

    container.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth'
    });
  }

  scrollToActiveProduct() {
    const container = this.carousel.nativeElement;
    const cardWidth = 305;
    container.scrollTo({
      left: this.productIndex * cardWidth,
      behavior: 'smooth'
    });
  }
}
