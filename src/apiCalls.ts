import {autoinject} from 'aurelia-framework';
import {HttpClient,json} from 'aurelia-fetch-client';
import 'fetch';

//http://localhost:3000/api/articles?filter[order]=createdAt%20DESC&filter[limit]=3&filter[skip]=1
@autoinject
export class prevArticleBuilder {
	private http: HttpClient=new HttpClient();
	constructor() {
		this.http.configure(config => {
			config
				.useStandardConfiguration()
				.withBaseUrl('http://localhost:3000/api/');
		});
	}


	
	getPreview(startNb?: number, endNb?: number){
		console.log("getpreview called");

		return this.http.fetch('articles')
			.then(response => response.json());
	}
	getArticle(id:string){
		return this.http.fetch('articles/' + id)
			.then(response => response.json())

	}
	 postArticle(article) {
        this.http.fetch('articles', {
            method: 'post',
            body: json(article)
        })
        .then(response=>{ console.log(response);})
    }
}