//import * as elasticsearch from 'elasticsearch-browser';

export class Elastic {
  client: any;
  constructor() {
   var elasticsearch = require('elasticsearch');
   this.client = new elasticsearch.Client({host: 'localhost:9200',
   log: 'trace'});
  }

   public getResponse(query: string): Object {
     var response: Object = {'_source':{'title':'nothing', 'url':'https://html5book.ru/examples/html-tags.html', 'description': 'the text will be here'}};// = [{_source: {title:'nothing', url:'https://html5book.ru/examples/html-tags.html'}}];
     this.client.search(
     {
     index: 'news',
     type: '_doc',
     body: {
       '_source' : ['title', 'description', 'url'],
       query: {
         match: {
           'description': query
         }
       }
     }
   }).then(function (resp: any) {
     response = resp['hits']['hits'];
 }, function (err: any) {
     console.trace(err.message);
 });
  return response;
 }


 }
