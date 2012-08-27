var aline =0
	lines = ["Hi Neil.","You might wonder why I asked you to come here?","Well, let me sum up the situation:","This war has been lasting for too long","We have to prove to the world that we are not responsible","As you know, it's the evil Doctor Badguy's fault","Unfortunatly, we discovered that he has escaped Earth. ","This is where we need you !","We'll send you in space to kick his ass and bring him back!","Yout first destination is Coooold.","Dont forget your coat !"]
	lines = ["Hi Neil.","You might wonder why I asked you to come here?","Well, let me sum up the situation:","This war lasted for too long","We have to prove to the world that we are not responsible","As you know, it's the evil Doctor Badguy 's fault","Unfortunatly, we have discovered that he escaped the earth. ","This is where we need you !","We'll send you in space to kick his ass and bring him back!","Yout first destination is Coooold.","Dont forget your coat !"]
	lines = ["Hi Neil.","You might wonder why I asked you to come here?","Well, let me sum up the situation:","This war lasted for too long","We have to prove to the world that we are not responsible","As you know, it's the evil Doctor Badguy 's fault","Unfortunatly, we have discovered that he escaped the earth. ","This is where we need you !","We'll send you in space to kick his ass and bring him back!","Yout first destination is Coooold.","Dont forget your coat !"]

function nextLine() 
{
	$(".bulle").fadeOut("slow",function() {
		$(".bulle").html(lines[aline])
		if (aline==10){
			$("<a href='game.html'>&gt;</a>").appendTo($(".bulle"))
		}
		else
		{
		$("<a href='#'>&gt;</a>").appendTo($(".bulle")).click(function(e) {
			e.preventDefault();
			aline++;
			nextLine();
		})
		}
		$(".bulle").fadeIn("slow");
	})
	
}


$().ready( function() {
	$("<img alt='background' src='Assets/Images/Room back.png' />").appendTo($("#screen>div")).show()
	$("<img alt='background' src='Assets/Images/Colonel.png' />")
		.css({top:"190px",left:"50px"})
		.appendTo($("#screen>div"))
		.show()
	setTimeout(function(){
		$("<div class='bulle'>")
			.appendTo($("#screen>div"))
			.css({top:"251px",left:"300px"})
		nextLine();
	}
	,2000);
})
