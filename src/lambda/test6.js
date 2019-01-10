const axios = require( 'axios' );
const API_ENDPOINT = 'https://jsonplaceholder.typicode.com/todos/1';

exports.handler = ( event, context, callback ) => {
	axios.get( API_ENDPOINT )
		.then( ( response ) => {
			callback( null, {
				headers: {
					'content-type': 'application/json;charset=utf-8'
				},
				statusCode: 200,
				body: JSON.stringify( response.data )
			} );
		} )
		.catch( ( error ) => {
			callback( error );
		} );
};
