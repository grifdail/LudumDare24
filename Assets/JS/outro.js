var aline =0
	lines = ["Well...<br/>You captured me.","You must be proud of you, Mr Goodguy ?","After all, you just saved the world.","But, if you had chosen different evolutions, do you really think that you would have caught me ?"]

function nextLine() 
{
	$(".bulle").fadeOut("slow",function() {
		$(".bulle").html(lines[aline])
		if (aline==3){
			$("<a href='index.html'>&gt;</a>").appendTo($(".bulle")).click(function(e) {
				e.preventDefault();
				$(".bulle").fadeOut("slow");
				$("#screen").fadeOut(5000,function(){ document.location.href="index.html" })
			})
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
	$("<img alt='background' src='Assets/Images/Prison back.png' />").appendTo($("#screen>div")).show()
	$("<img alt='background' src='Assets/Images/badguyC.png' />").css({top:"178px",left:"52px"}).appendTo($("#screen>div")).show()
	$("<img alt='background' src='Assets/Images/Prison grille.png' />").appendTo($("#screen>div")).show()
	setTimeout(function(){
		$("<div class='bulle'>")
			.appendTo($("#screen>div"))
			.css({top:"251px",left:"300px"})
		nextLine();
	}
	,2000);
})
