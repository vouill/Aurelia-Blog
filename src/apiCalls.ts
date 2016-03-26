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

	// get limit of preview while skipping skip number of prev
	getPreviewList( limit: number,skip: number,){
		return this.http.fetch(`prevArticles?filter[order]=createdAt%20DESC&filter[limit]=${limit}&filter[skip]=${skip}`)
			.then(response => response.json());
	}
	getArticle(id:string){
		return this.http.fetch('articles/' + id)
			.then(response => response.json())

	}
	 postArticle(article) {
        return this.http.fetch('articles', {
            method: 'post',
            body: json(article)
        })
        .then(response => response.json());
    }

    postPrevArticle(prev){
    	return this.http.fetch('prevArticles', {
            method: 'post',
            body: json(prev)
        })
        .then(response => response.json());
    }
}