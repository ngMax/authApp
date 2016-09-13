import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from "@angular/http";
import { provideForms, disableDeprecatedForms } from "@angular/forms";
import { APP_ROUTES } from './app/app.routes';
import { AppComponent, environment } from './app/';
import { authService } from './app/auth.service';
import { AuthGaurd } from './app/shared/auth.gaurd';
if (environment.production) {
  enableProdMode();
}
platformBrowserDynamic().bootstrapModule(AppModule); 
bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  disableDeprecatedForms(),
  provideForms(),
  APP_ROUTES,
  authService,
  AuthGaurd
]);

