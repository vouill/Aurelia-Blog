import {prevArticleBuilder} from "apiCalls";

export class admin{
	prev.title : string ="";
	prev.content : string="";
	art.title : string ="";
	art.content : string="";
	
	constructor(){
	}
	submit() {


		// console.log(`Builded : prev title ${this.prev.title}  content${this.prev.content}
		// 	article title ${this.art.title} content ${this.art.content}`);
	
		var apiCall=new prevArticleBuilder();
		apiCall.postArticle({title:this.art.title,content:this.art.content})
		.then(resp => this.buildPrev(resp.id));		
    }
    buildPrev(id:string){
    	var apiCall=new prevArticleBuilder();
    	apiCall.postPrevArticle({title:this.art.title,content:this.art.content.substring(0,240)+"...",articleId:id})
    	.then(resp => console.log(resp));
    }

}