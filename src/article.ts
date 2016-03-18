
import {prevArticleBuilder} from "apiCalls";

export class article {
	article: Object = {};

	constructor(){

	}

	activate(params) {
        console.log("recieved : " + params.id);
        var stuff = new prevArticleBuilder();
		stuff.getArticle(params.id)
			.then(response => this.article=response);
    }
    bind(){
		console.log(this.article);
    }
}