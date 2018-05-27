# Bubbler
Bubbler is a pure JavaScript/CSS bubble menu inspired by material design. No libraries required.

![demo](http://i.imgur.com/Bg232lt.gif)

# How to
To create a menu, you must create a new `Bubbler` instance and pass in your options.

```JavaScript
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

var menu = new Bubbler(options);
```

# Options
`options` must be an array of objects. Each option object can contain several parameters.

# Parameters
`icon` -> Required. The icon which is displayed for the option. Supports any single-character long icon, including font icons (can be set to HTML to display a font icon)

`label` ->  Required. The text which is displayed when hovering over an option

`callback` -> Optional. This function is called when the element is clicked.

`display` -> Optional. Define custom CSS rules.
