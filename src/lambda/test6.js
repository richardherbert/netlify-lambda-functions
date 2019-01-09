const axios = require( 'axios' );
const API_ENDPOINT = 'https://jsonplaceholder.typicode.com/todos/1';

exports.handler = ( event, context, callback ) => {
	axios.get( API_ENDPOINT )
		.then( ( response ) => {
			// const payload = JSON.parse( event.body );

			callback( null, {
				statusCode: 200,
				// body: JSON.stringify( response.body )
				body: response.json()
			} );
		} )
		.catch( ( error ) => {
			callback( error );
		} );
};
