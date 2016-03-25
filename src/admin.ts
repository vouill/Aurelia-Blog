import {prevArticleBuilder} from "apiCalls";

export class admin{
	title : string ="";
	content : string="";
	constructor(){
	}
	submit() {
		var apiCall=new prevArticleBuilder();

		apiCall.postArticle({title:this.title,content:this.content});
    }

}