$(document).ready(function () {
    var preAnswerChosed=[];
		var postAnswerChosed=[];
    var preClicked;
		var postClicked;
		

    $(".pretest p").click(function(){
        preClicked = $(this).html();
        preAnswerChosed.push(preClicked);
        $(this).parent().hide();
        $(this).parent().next().addClass("active");
    });


		$(".posttest p").click(function(){
				postClicked = $(this).html();
				postAnswerChosed.push(postClicked);
				$(this).parent().hide();
				$(this).parent().next().addClass("active");
		});
		$("button").click(function(){
				console.log(postAnswerChosed);
		});

});
