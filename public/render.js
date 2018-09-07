$.ajax({url: "/results", success: function(result){
        $("#results").html(result);
    }});

$.ajax({url: "/form", success: function(result){
        $("#form").html(result);
    }});

