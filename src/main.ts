/**
 * Created by cervantes on 26/12/16.
 */
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app/app.module';
if (process.env.ENV === 'production') {
    enableProdMode();
}
platformBrowserDynamic().bootstrapModule(AppModule);
