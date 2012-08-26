/**
 * @author sarajchipps
 */


$(document).ready(wireUpEvents);
			
function wireUpEvents(){
	$('button').click(checkLength);
	$('#tabs').tabs();
}

function validateEmail(email) 
{ 
 var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zAZ\-0-9]+\.)+[a-zA-Z]{2,}))$/ 
 return re.test(email); 
}

function checkPasswords(a, b, c){
	if(b == c){
		displayAlert(a);
	}
	else{
		$("#Error").html("Please make sure passwords match");
		$(".password").css("border", "1px solid red");
	}
}

function checkLength(){
	$("#UserName").css("border", "1px solid black");
	$("#Password").css("border", "1px solid black");
	$("#ConfirmPassword").css("border", "1px solid black");
	$("#Email").css("border", "1px solid black");
	$("#Error").html("");
	
	var a = $("#UserName").val();
	var b = $("#Password").val();
	var c = $("#ConfirmPassword").val();
	var d = $("#Email").val();
	
	if((a > "") && (b > "") && (c > "")&&(d > ""))
	{
		var isEmail = validateEmail(d);
		if (isEmail == true) {
			checkPasswords(a, b, c);
		}
		else{
			$("#Error").html("Please enter a valid email.");
			$("#Email").css("border", "1px solid red");
		}
	}
	else
	{
		$("#Error").html("Please enter a value in all fields");
		
		if(a == "")
		{
			$("#UserName").css("border", "1px solid red");
		}
		
		if(b == "")
		{
			$("#Password").css("border", "1px solid red");
		}
		
		if(c == "")
		{
			$("#ConfirmPassword").css("border", "1px solid red");
		}
		if(d == "")
		{
			$("#Email").css("border", "1px solid red");
		}
		
	}
	}
	

	
function displayAlert(a)
{
	alert("Great job, " + a + "!");
}
