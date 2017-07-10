
export default class Api{
	
	constructor(){
		this.base = 'https://newsapi.org/v1/articles';
		this.key = '2133e5fc0e4b4cae930c479f8e093468';
		this.url = this.base + '?apiKey='+ this.key;
	}

	getData(source = '', sort = ''){
		return fetch(this.url + '&source=' + source + '&sortBy=' + sort);
	}
}

