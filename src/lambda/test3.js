const fetch = require('node-fetch');

const API_ENDPOINT = 'https://jsonplaceholder.typicode.com/todos/1';

exports.handler = async ( event, context ) => {
	return fetch( API_ENDPOINT )
		.then( response => response.json() )
		.catch( error => ( {
			statusCode: 422,
			body: String( error )
		} ) );
};
