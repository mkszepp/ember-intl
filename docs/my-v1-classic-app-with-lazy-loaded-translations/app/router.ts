import EmberRouter from '@ember/routing/router';
import config from 'my-v1-classic-app-with-lazy-loaded-translations/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  // Add routes here
  this.mount('my-v1-engine');
});
