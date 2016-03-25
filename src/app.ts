

import {Router, RouterConfiguration} from 'aurelia-router'

export class App {
  router: Router;
  
  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['/', 'home'], name: 'welcome',      moduleId: 'welcome',      nav: true, title: 'Home' },
      { route: 'about',         name: 'about',        moduleId: 'about',        nav: true, title: 'About' },
      { route: 'front', name: 'front', moduleId: 'front', nav: true, title: 'Front' },
      { route: 'back', name: 'back', moduleId: 'back', nav: true, title: 'Back' },
      { route: 'admin', name: 'admin', moduleId: 'admin', nav: true, title: 'Admin' },
      { route: 'article/:id', name: 'article', moduleId: 'article', nav: false, title: 'article' }
    ]);

    this.router = router;
  }
}
