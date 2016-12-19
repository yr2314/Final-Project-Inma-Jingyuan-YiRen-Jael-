var preAge = 0;
var preCareer = 0;
var preScience = 0;
var postAge = 0;
var postCareer = 0;
var postScience = 0;

$(".pretest .ageN").click(function(){
    preAge=preAge+1;
    document.getElementById("iiAge").innerHTML = preAge;
  });

$(".posttest .iageN").click(function(){
      postAge=postAge+1;
      document.getElementById("iiaAge").innerHTML = postAge;
    });
$(".pretest .careerN").click(function(){
    preCareer=preCareer+1;
    document.getElementById("iiCareer").innerHTML = preCareer;
  });

$(".posttest .icareerN").click(function(){
      postCareer=postCareer+1;
      document.getElementById("iiaCareer").innerHTML = postCareer;
    });
$(".pretest .scienceN").click(function(){
    preScience=preScience+1;
    document.getElementById("iiScience").innerHTML = preScience;
  });

$(".posttest .iscienceN").click(function(){
      postScience=postScience+1;
      document.getElementById("iiaScience").innerHTML = postScience;
    });
