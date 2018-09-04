

$.ajax({url: "/", success: function(result){
        $("#results").html(result);
    }});

$(function() {
	
	var el = document.getElementById('checkboxes');

	var options = el.getElementsByTagName('input');

	for (var i=0, len=options.length; i<len; i++) {

		if (options[i].type === 'checkbox') {
			options[i].onclick = function() {
				var dings = this.id.replace("XXX", " ");
				console.log(dings);
				// document.getElementById("checkboxes").submit()
			}
		}

	}

});




// Was wurde von dem Form gesendet