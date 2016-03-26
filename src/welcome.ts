
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
    preview.getPreviewList(5,0)
      .then(response => this.prevArticles = response);

  }
  bind(){ 
  }

  log(input:string){
    console.log("logged : "+JSON.stringify(input));
    return;
  }

}

