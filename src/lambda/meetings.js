const axios = require( 'axios' );
const API_ENDPOINT = 'https://api.subsume.io/hertingfordbury/v1/meetings';

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
