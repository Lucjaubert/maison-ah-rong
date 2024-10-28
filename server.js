import 'zone.js/node';
import express from 'express';
import { ngExpressEngine } from '@nguniversal/express-engine';
import { APP_BASE_HREF } from '@angular/common';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { AppServerModuleNgFactory } from './dist/maison-ah-rong-server/main'; 

// For __dirname in ES Module
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Express server
const app = express();

const PORT = process.env.PORT || 4000;
const DIST_FOLDER = join(process.cwd(), 'dist/maison-ah-rong');

// Set the engine
app.engine('html', ngExpressEngine({
    bootstrap: AppServerModuleNgFactory,
}));

app.set('view engine', 'html');
app.set('views', join(DIST_FOLDER, 'browser'));

// Serve static files
app.get('*.*', express.static(join(DIST_FOLDER, 'browser'), {
    maxAge: '1y'
}));

// All regular routes use the Universal engine
app.get('*', (req, res) => {
    res.render('index', { req, providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }] });
});

// Start up the Node server
app.listen(PORT, () => {
    console.log(`Node Express server listening on http://localhost:${PORT}`);
});
