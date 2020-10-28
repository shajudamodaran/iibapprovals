// JavaScript Document

function login()
{

	var a1=document.getElementById("uname").value;
	
	var a2=document.getElementById("pword").value;
	
	
	if(a1=="iibrandr"&&a2=="2255")
	{
		window.open("add.html");
	}
	else
	{
		alert("Incorrect Username or Password");
	}
	
}