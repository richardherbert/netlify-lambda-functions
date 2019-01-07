import fetch from 'node-fetch';

const API_ENDPOINT = 'https://jsonplaceholder.typicode.com/todos/1';

exports.handler = async ( event, context ) => {
	return fetch( API_ENDPOINT )
		.then( response => response.json() )
		.then( data => ( {
			statusCode: 200,
			body: `${data.title}`
		} ) )
		.catch( error => ( {
			statusCode: 422,
			body: String( error )
		} ) );
};
