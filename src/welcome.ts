
import {prevArticleBuilder} from "apiCalls";
import {autoinject} from 'aurelia-framework';

@autoinject
export class Welcome {
  prevArticles: Array<Object> = [];

  constructor() {
    var preview = new prevArticleBuilder();
    preview.getPreview(0, 5)
      .then(response => this.prevArticles=response);
  }

  bind(){
  }

}

