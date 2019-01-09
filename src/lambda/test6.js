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
			console.log(response.data);

			callback( null, {
				statusCode: 200,
				// body: JSON.stringify( response.body )
				body: response.data
			} );
		} )
		.catch( ( error ) => {
			callback( error );
		} );
};
