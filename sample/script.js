ClassicEditor
	.create( document.querySelector( '.editor' ), {
		// Editor configuration.
		simpleUpload: {
			uploadUrl: 'http://localhost:8080/upload',
			headers: {
				'X-CSRF-TOKEN': 'your-csrf-token',
			},
		},
		language: 'zh',
	} )
	.then( editor => {
		window.editor = editor;
	} )
	.catch( handleSampleError );

function handleSampleError( error ) {
	const issueUrl = 'https://github.com/ckeditor/ckeditor5/issues';

	const message = [
		'Oops, something went wrong!',
		`Please, report the following error on ${ issueUrl } with the build id "nw4b76jes99d-u2532vbt43w" and the error stack trace:`
	].join( '\n' );

	console.error( message );
	console.error( error );
}
