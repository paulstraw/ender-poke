Ender Poke
============

A tiny (516 bytes minified) [Ender](http://ender.no.de) module for handling swipe gestures on mobile devices. Currently, the four cardinal directions are supported. To use it, add it to your Ender build (see below) and do something like this:

``` javascript
$('#someElement').poke({
	'N-S': function() {
		//do stuff on "north, then south" swipe
	},
	'W': function() {
		//do stuff on "west" swipe
	},
	'S-E-N': function() {
		//do stuff on "south, east, then north" swipe
	}
});
```

Ender
-------

Poke is an [NPM](http://npmjs.org/) package that requires Ender. If you're not already using Ender, you're missing out; get it now:

```
$ npm install ender -g
```

If you're new to Ender, this will get you going:

```
$ ender build ender-poke
```

If you're already running Ender, just add it:

```
$ ender add ender-poke
```