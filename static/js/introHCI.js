'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {

	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		$("#testjs").text("Why did you click me?! That hurts!");
		$(".jumbotron p").toggleClass("active");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);

	$("#submitBtn").click(function(e) {
		var projectId = $("#project").val();
		var width = $("#width").val();
		var description = $("#description").val();
		$(projectId).animate({
			width: width
		});
		$(projectId + " .project-description").text(description);
	});
}

function projectClick(e) {
	e.preventDefault();

	var projectTitle = $(this).find("p").text();
  var jumbotronHeader = $(".jumbotron h1");
  jumbotronHeader.text(projectTitle);

  var containingProject = $(this).closest(".project");
  var description = $(containingProject).find(".project-description");

  if(description.length == 0) {
  	$(containingProject).append("<div class='project-description'><p>Description of the project</p></div>");
  } else {
  	// description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
  	$(containingProject.children(".project-description").fadeOut();
  }
  
}