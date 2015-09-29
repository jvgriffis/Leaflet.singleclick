# singleclick for Leaflet 1.0.0-beta1 and greater

This plugin extends `L.Evented` to fire the `singleclick` event. A `singleclick` happens when clicking on something but not double-clicking for 500msec.

The timeout can be configured by setting the `singleClickTimeout` option on the relevant `L.Evented`, like so:

```js
marker.options.singleClickTimeout = 250;
marker.on('singleclick', function(ev){ ... } );
```

## live example

http://mazemap.github.io/Leaflet.singleclick/
