function init_oauthio() {
	OAuth.initialize(credentials.key);
}

function retrieve_token(callback) {
	$.ajax({
		url: '/oauth/token',
		success: function (data, status) {
			callback(null, data.token);
		},
		error: function (data) {
			callback(data);
		}
	});
}

function authenticate(token, callback) {
	// Add the code to authenticate the user here
}

function retrieve_user_info(callback) {
	// Add the code to perform a user request here
}

$('#login_button').click(function() {
	init_oauthio();
	retrieve_token(function(err, token) {
		authenticate(token, function(err) {
			if (!err) {
				retrieve_user_info(function(user_data) {
					$('#name_box').html(user_data.name)
					$('#email_box').html(user_data.email);
					$('#img_box').attr('src', user_data.avatar);
				});
			}
		});
	});
});
