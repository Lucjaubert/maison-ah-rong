import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppServerModule } from './app/app.server.module';
import { ngExpressEngine } from '@nguniversal/express-engine';

if (environment.production) {
  enableProdMode();
}

export { AppServerModule };
export { ngExpressEngine };
