

L.Evented.addInitHook( function () {

	this.on('click', this._scheduleSingleClick, this);
	this.on('dblclick', this._cancelSingleClick, this);

	this._singleClickTimeout = null;
	this._cancel = false;
	this._defaultTimeout = 500;
});

L.Evented.include({

	_scheduleSingleClick: function(ev) {
		this._cancelSingleClick(false);

		this._singleClickTimeout = window.setTimeout(
			L.bind(this._fireSingleClick, this, ev),
			this.options.singleClickTimeout || this._defaultTimeout);
	},

	_cancelSingleClick: function(t) {
		window.clearTimeout(this._singleClickTimeout);
		if(t !== false){
			this._cancel = true;
        	setTimeout(function(){ this._cancel=false; }.bind(this), (this.options.singleClickTimeout ? this.options.singleClickTimeout + 50 : this._defaultTimeout + 50) );
		}
	},

	_fireSingleClick: function(ev) {
		if (!ev.originalEvent._stopped && !this._cancel) {

	        setTimeout(function(){
	            if(!this._cancel){
					this.fire('singleclick', L.Util.extend(ev, {type: 'singleclick'}));
	            }
	        }.bind(this), 50);

		}
	}
})

