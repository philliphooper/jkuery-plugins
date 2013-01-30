(function( $ ) {

	var methods = {
		init : function( options ) {
			var $this = this
			var filtercount = $this.children().length
			var filterID = $this.attr('id') + '_filter'
			var filterCountID = $this.attr('id') + '_count'
			var newFilterID = '#' + filterID.replace('[', '\\[').replace(']', '\\]')
			var newFilterCountID = '#' + filterCountID.replace('[', '\\[').replace(']', '\\]')
			$this.after('<span class="inputFormat" style="margin: 0px 5px 0px 5px;">Filter:</span><input class = "inputFormat" type = "text" id="' + filterID + '" size = "7"><span class="filtercount" id="' + filterCountID + '"> (' + filtercount + ')</span>')
			$(newFilterID).bind('keyup', function(){
				var searchFilter = $(this).val()
				var results = 0
				$($this.children().get().reverse()).each(function(){
					var $thisSelect = $(this)
					$thisSelect.show()
					if ($thisSelect.text().toLowerCase().indexOf(searchFilter.toLowerCase()) < 0) {
						$thisSelect.hide()
					} else {
						$thisSelect.prop('selected', 'true')
						results++
					}				
				})
				$(newFilterCountID).text(' (' + results + ')')
				alert('git test')
			})
		}
	};
	
	$.fn.selectFilter = function( method ) {
	    if ( methods[method] ) {
			return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
			return methods.init.apply( this, arguments );
		} else {
			$.error( 'Method ' +  method + ' does not exist on jQuery.selectFilter' );
		}    
		
	};
})( jQuery );