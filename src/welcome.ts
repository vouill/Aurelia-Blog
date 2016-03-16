
import {prevArticleBuilder} from "apiCalls";
import {autoinject} from 'aurelia-framework';

@autoinject
export class Welcome {
  prevArticles: Array<Object> = [];

  constructor() {

    this.loadPreviews();
    
  }

  loadPreviews(){
    var preview = new prevArticleBuilder();
    preview.getPreview()
      .then(response => this.prevArticles = response);

  }
  bind(){
  }

}

