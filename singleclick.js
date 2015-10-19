L.Evented.addInitHook( function () {
    this.h = null;
    this.on( 'click', this.check_later, this );
    this.on( 'dblclick', this.timeoutClear, this );

});

L.Evented.include({

	timeoutClear : function(){
		setTimeout( this.clear_h.bind(this), 0 );
	},

    check_later: function(e) {
        this.clear_h();

        this.h = setTimeout( this.check.bind(this, e), (this.options.singleClickTimeout || 500) );
    },

    check: function(e){
        this.fire( 'singleclick', L.Util.extend( e, { type : 'singleclick' } ) );
    },

    clear_h: function(){
        if (this.h != null)
        {
            clearTimeout( this.h );
            this.h = null;
        }
    }

})

