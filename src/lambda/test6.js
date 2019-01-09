const axios = require( 'axios' );
const API_ENDPOINT = 'https://jsonplaceholder.typicode.com/todos/1';

exports.handler = ( event, context, callback ) => {
	axios.get( {
			method: 'get'
			,url: API_ENDPOINT
			,responseType: 'json'
		}
	)
		.then( ( response ) => {
			// const payload = JSON.parse( event.body );

			callback( null, {
				statusCode: 200,
				// body: JSON.stringify( response.body )
				body: response
			} );
		} )
		.catch( ( error ) => {
			callback( error );
		} );
};
