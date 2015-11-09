$(function() {
	shortcut.add("Right",function() {
		moveRight();
	});
	shortcut.add("Left",function() {
		moveLeft();
	});
	shortcut.add("Up",function() {
		jump();
	});
});

function jump()
{
	//alert("in");
	$('#mario').animate({
		'marginTop' : "-=100px"
	},100);
	$('#mario').animate({
		'marginTop' : "+=100px"
	},100);
	
	window.setTimeout(redirect,300)
}

function redirect()
{
	var rStart = $("#resumeStart").position().left-50;
	var rEnd = $("#resumeEnd").position().left;
	var mStart = $("#moreStart").position().left-50;
	var mEnd = $("#moreEnd").position().left;
	var cStart = $("#contactStart").position().left-50;
	var cEnd = $("#contactEnd").position().left;

	var p = $("#mario");
	var position = p.offset();
	//alert("left: " + position.left + ", top: " + position.top);
	
	if(position.left>=rStart && position.left<=rEnd)
	{
		window.location="docs/resume.pdf";
	}
	else if(position.left>=mStart && position.left<=mEnd)
	{
		window.location="more.html";
	}
	else if(position.left>=cStart && position.left<=cEnd)
	{
		window.location="contact.html";
	}
	
}

function moveRight()
{
	$('#mario').animate({
		'marginLeft' : "+=50px"
	},30);
}

function moveLeft()
{
	$('#mario').animate({
		'marginLeft' : "-=50px"
	},30);
}

