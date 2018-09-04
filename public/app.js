$(document).ready(function(){
	$.getJSON("/api/exercises")
	.then(addExercises)	
});

var newDataOut = {};
var template = $("#tutorial-template").html();

function addExercises(exercises){
	exercises.forEach(function(exercise){
	var html = Mustache.render(template, exercise);	
	console.log(html);
	$('#exercises').append(html);
	});
}


$(function () {
    $('#checkboxes').on('submit',function (e) {
              $.ajax({
                type: 'get',
                url: '/api/exercises/query',
                data: $('#checkboxes').serialize(),
                success: function (newData) {
                 newDataOut = newData;
                 console.log(newData);
                 $( "#exercises" ).empty();
                 addExercises(newDataOut);
                }
              });
          e.preventDefault();
        });
});

// submitform
// get JSON
// add exercise

