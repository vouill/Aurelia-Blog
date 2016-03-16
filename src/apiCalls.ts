import {autoinject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@autoinject
export class prevArticleBuilder {
	private http: HttpClient=new HttpClient();
	constructor() {
		this.http.configure(config => {
			config
				.useStandardConfiguration()
				.withBaseUrl('http://jsonplaceholder.typicode.com/');
		});
	}


	
	getPreview(startNb?: number, endNb?: number){
		console.log("getpreview called");

		return this.http.fetch('posts')
			.then(response => response.json());
	}
}