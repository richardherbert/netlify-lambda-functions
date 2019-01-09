const axios = require( 'axios' );
const API_ENDPOINT = 'https://jsonplaceholder.typicode.com/todos/1';

exports.handler = ( event, context, callback ) => {
	axios.get( API_ENDPOINT, {
			responseType: 'json'
		}
	)
		.then( ( response ) => {
			callback( null, {
				statusCode: 200,
				body: JSON.stringify( response.data )
			} );
		} )
		.catch( ( error ) => {
			callback( error );
		} );
};
