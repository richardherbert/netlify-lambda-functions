const axios = require( 'axios' )
const API_ENDPOINT = 'https://jsonplaceholder.typicode.com/todos/1';

exports.handler = ( event, context, callback ) => {
	axios.get( 'https://jsonplaceholder.typicode.com/todos/1' )
		.then( ( response ) => {
			callback( null, {
				statusCode: 200,
				body: response.data.title,
			} );
		} )
		.catch( ( error ) => {
			callback( error );
		} );
};
