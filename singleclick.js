

L.Evented.addInitHook( function () {
	this.on('click', this._scheduleSingleClick, this);
	this.on('dblclick', this._cancelSingleClick, this);

	this._singleClickTimeout = null;
});

L.Evented.include({

	_scheduleSingleClick: function(ev) {
		this._cancelSingleClick();
		this._singleClickTimeout = window.setTimeout(
			L.bind(this._fireSingleClick, this, ev),
			this.options.singleClickTimeout || 500);
	},

	_cancelSingleClick: function() {
		window.clearTimeout(this._singleClickTimeout);
	},

	_fireSingleClick: function(ev) {
		if (!ev.originalEvent._stopped) {
			this.fire('singleclick', L.Util.extend(ev, {type: 'singleclick'}));
		}
	}
})

