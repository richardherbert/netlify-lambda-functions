const axios = require( 'axios' );
const API_ENDPOINT = 'https://jsonplaceholder.typicode.com/todos/1';

exports.handler = ( event, context, callback ) => {
	axios.get( API_ENDPOINT )
		.then( ( response ) => {
			callback( null, {
				statusCode: 200,
				body: response.data,
			} );
		} )
		.catch( ( error ) => {
			callback( error );
		} );
};
