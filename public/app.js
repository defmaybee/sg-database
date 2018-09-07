$(function () {
	$.getJSON("/api/exercises")
	.then(addExercises)
	

var newDataOut = {};
var template = $("#tutorial-template").html();

function addExercises(exercises){
	console.log(exercises);
	exercises.forEach(function(exercise){
	var html = Mustache.render(template, exercise);	
	$('#exercises').append(html);
	});
}



    $('#formwrapper').on('submit',function (e) {
            e.preventDefault();
    
              $.ajax({
                type: 'get',
                url: '/api/exercises/query',
                data: $('#checkboxes').serialize(),
                success: function (newData) {
                 newDataOut = newData;
                 $( "#exercises" ).empty();
                 addExercises(newDataOut);
                }
              });

              $.ajax({
				type: 'get',
				url: '/form',
				data: $('#checkboxes').serialize(),
				success: function (newForm) {
				$("#form").html(newForm);
				}
			  });

        });



});







// $(function () {
    
//     $('#checkboxes').on('submit',function (e) {
//               $.ajax({
//                 type: 'get',
//                 url: '/api/exercises/query',
//                 data: $('#checkboxes').serialize(),
//                 success: function (newData) {
//                  newDataOut = newData;
                 
//                  $( "#exercises" ).empty();
//                  addExercises(newDataOut);
//                 }
//               });

//         //       $.ajax({
//         //         type: 'get',
//         //         url: '/form',
//         //         data: $('#checkboxes').serialize(),
//         //         success: function (newForm) {
//         //         	$("#results").html(result);
         
//         // });
//                e.preventDefault();
// });


