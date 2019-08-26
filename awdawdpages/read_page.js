<script>
		function makeApiCall() {
			var params = {
				
				spreadsheetId: '1Ii0ujs_d63bpTUlJe4E0GzWTMeSkiJrbdoZHFeooXwU',  // TODO: Update placeholder value.

				range: 'Daily',  // TODO: Update placeholder value.

				valueRenderOption: 'ValueRenderOption.FORMATTED_VALUE',  // TODO: Update placeholder value.

				dateTimeRenderOption: '[DateTimeRenderOption.SERIAL_NUMBER',  // TODO: Update placeholder value.
			};

			var request = gapi.client.sheets.spreadsheets.values.get(params);
			request.then(function(response) {
				// TODO: Change code below to process the `response` object:
				console.log(response.result);
			}, function(reason) {
				console.error('error: ' + reason.result.error.message);
			});
		}

		function initClient() {
			var API_KEY = 'AIzaSyAmtwP_8cvZudCSRBsadl4eaOorEXlorXQ';  // TODO: Update placeholder with desired API key.

			var CLIENT_ID = '959523121907-t9q775rle42blehbinbh3c6qsmel1shf.apps.googleusercontent.com';  // TODO: Update placeholder with desired client ID.

			// TODO: Authorize using one of the following scopes:
			//   'https://www.googleapis.com/auth/drive'
			//   'https://www.googleapis.com/auth/drive.file'
			//   'https://www.googleapis.com/auth/drive.readonly'
			//   'https://www.googleapis.com/auth/spreadsheets'
			//   'https://www.googleapis.com/auth/spreadsheets.readonly'
			var SCOPE = 'https://www.googleapis.com/auth/spreadsheets.readonly';

			gapi.client.init({
				'apiKey': API_KEY,
				'clientId': CLIENT_ID,
				'scope': SCOPE,
				'discoveryDocs': ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
			}).then(function() {
				gapi.auth2.getAuthInstance().isSignedIn.listen(updateSignInStatus);
				updateSignInStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
			});
		}

		function handleClientLoad() {
			gapi.load('client:auth2', initClient);
		}

		function updateSignInStatus(isSignedIn) {
			if (isSignedIn) {
				makeApiCall();
			}
		}

		function handleSignInClick(event) {
			gapi.auth2.getAuthInstance().signIn();
		}

		function handleSignOutClick(event) {
			gapi.auth2.getAuthInstance().signOut();
		}
		</script>