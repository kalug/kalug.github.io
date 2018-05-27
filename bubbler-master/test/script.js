var options =
[
	{
		icon:'1',
		label: 'Run alert function',
		callback: function() {
			alert('dasd');
		}
	},
	{
		icon:'<i class="fa fa-id-card" aria-hidden="true"></i>',
		label: 'Test Element 2'
	},
	{
		icon:'3',
		label: 'Test Element 3',
		display: {
			color: 'blue',
			background: 'red'
		}
	}
];

var context = new Bubbler(options);
