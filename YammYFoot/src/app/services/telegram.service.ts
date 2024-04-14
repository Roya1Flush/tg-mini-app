import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, } from '@angular/core';

interface TgButton {
  show(): void;
  hide(): void;
  setText(text: string): void;
  onClick(fn: Function): void;
  offClick(fn: Function): void;
  enable(): void;
  disable(): void;
  setColor(color: object): void; /* Разобраться с цветом кнопки */
}

@Injectable({
  providedIn: 'root'
})
export class TelegramService {
  private window; tg;
  constructor(@Inject(DOCUMENT) private _document) { 
    this.window = this._document.defaultView;
    this.tg = this.window.Telegram.WebApp;
    this.tg.expand(); /* Открытие на весь экран */
  }

  get MainButton(): TgButton {
    return this.tg.MainButton;
  }

  get BackButton(): TgButton {
    return this.tg.BackButton;
  }

  sendData(data: object) {
    this.tg.sendData(JSON.stringify(data));
  }

  ready() {
    this.tg.ready();
  } 
}
