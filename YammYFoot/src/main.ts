import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

 
/* const telegram = window.Telegram.WebApp;
telegram.init();
console.log(telegram.version);
telegram.setWebhook();
console.log(telegram.version); */ /* Попытка обновить до версии 7.4 */


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
