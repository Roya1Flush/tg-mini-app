import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, } from '@angular/core';
import { useWebAppClosingConfirmation } from 'vue-tg';
/* import { telegram-web-app } from 'telegram-web-app.js';
import { getVersion } from 'telegram-web-app.js' получение версии
 */
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
/* const telegramWebApp = telegram-web-app();

const version = getVersion();  получение версии */

const { isClosingConfirmationEnabled } = useWebAppClosingConfirmation();
const { enableClosingConfirmation } = useWebAppClosingConfirmation()
enableClosingConfirmation()
if (isClosingConfirmationEnabled) {
  // Подтверждение закрытия включено
} else {
  // Подтверждение закрытия выключено
};
/* const { isClosingConfirmationEnabled } = useWebAppClosingConfirmation()
if (isClosingConfirmationEnabled.value) {
  console.log('Confirmation enabled');
  // Подтверждение закрытия включено
} else { console.log('Confirmation disabled');
  // Подтверждение закрытия выключено
} */

@Injectable({
  providedIn: 'root'
})
export class TelegramService {
  private window; tg;
  constructor(@Inject(DOCUMENT) private _document) { 
    this.window = this._document.defaultView;
    this.tg = this.window.Telegram.WebApp;
    if (this.tg.isExpanded) {
      // Приложение растянуто на весь экран
    } else {
      // Приложение не растянуто
    }
    this.tg.expand(); /* Открытие на весь экран */
    if (this.tg.isExpanded) {
      // Приложение растянуто на весь экран
    } else {
      // Приложение не растянуто
    }

     /* const {isClosingConfirmationEnabled} = useWebApp();
    if ( isClosingConfirmationEnabled ) {
    console.log('Confirmation enabled');
  } 
    else {
    console.log('Confirmation disabled');
  };   */
  const { enableClosingConfirmation } = useWebAppClosingConfirmation()
  enableClosingConfirmation() //Подтверждение закрытия
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
