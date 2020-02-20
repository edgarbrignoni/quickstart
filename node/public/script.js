function testThis() {
	var settings = {
		'url': 'https://sandbox.plaid.com/categories/get',
		'method': 'POST',
		'timeout': 0,
		'headers': {
			'Content-Type': 'application/json'
		},
		'data': JSON.stringify({})
	};

	$.ajax(settings).done(function(response) {
		console.log(response);
	});
}

function anotherTest() {
	console.log('anotherTest');
}
