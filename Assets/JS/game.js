
function rand(x) { return Math.floor(Math.random() * (x+1));}

var Criminal = new Human("#BadCard"),
	Player = new Human("#GoodCard")

Player.enemy=Criminal;
Criminal.enemy=Player;

function endWorld() {
	console.log("joueur",Player.life,"mechant",Criminal.life)
	if (Criminal.life <= 0)
	{	
		console.log("Pasteque")
		$("#Planet").hide("slow");
		$('.modal-box').html("<p>You just defeat Doctor BadGuy. <br /> Unfortunatly he run away to another planet</p>");
		$('<a href="#" class="button">Follow</a>').appendTo($(".modal-box")).on("click",function(e) {
			initlevel(Leveltwo);
			$("#Planet").show("slow");
			$(".modal").fadeOut("slow");
		})
		$(".modal").fadeIn("slow");
	}
	else if  (Player.life <=0) 
	{	
		console.log("Banana")
		$("#Planet").hide("slow");
		$('.modal-box').html("<p>Doctor BadGuy just defeat you.</p>");
		$('<a href="#" class="button">Retry</a>').appendTo($(".modal-box")).on("click",function(e) {
			initlevel(Levelone);
			$("#Planet").show("slow");
			$(".modal").fadeOut("slow");
		})
		$(".modal").fadeIn("slow");
	}
}	

function useEvolution(e) {
	e.preventDefault();
	var PlayerUse = $(this).attr("data-Evo")
	var cue = Criminal.usableEvolution();
	var alea = rand(cue.length-1)
	// determination de l'ordre de passage
	var order = [];
	var action = [];
	if (rand(1))
	{
		order.push(Player,Criminal);
		action.push(PlayerUse,cue[parseInt(alea)]);
	}
	else
	{
		order.push(Criminal,Player);
		action.push(cue[parseInt(alea)],PlayerUse);
	}
	for (var i=0;i<2;i++)
	{
		var evolutionUsed = Evolution[action[i]];
		alea = rand(evolutionUsed.sensibility*2)-evolutionUsed.sensibility
		switch (evolutionUsed.type) 
		{
			case "at": order[i].enemy.hurt(evolutionUsed.value+alea);break;
			case "rH": order[i].health(evolutionUsed.value+alea);break;
			case "rD": order[i].iDef(evolutionUsed.value+alea);break;
			case "rH": order[i].health(evolutionUsed.value+alea);break;
			case "iH": order[i].iHealmax(evolutionUsed.value+alea);break;
			case "iD": order[i].iDefmax(evolutionUsed.value+alea);break;
		}
		console.log(order[i].enemy.id,order[i].enemy.life)
		if (( order[i].life<=0) || ( order[i].enemy.life<=0))
		{
			order[i].updateBar()
			return endWorld();
		}
	}
	Player.updateBar();
	Criminal.updateBar();
}

function initlevel(lvl) {
	$("#Pannel").html("")
	$(".page header h1").html(lvl.name)
	$(".page header p").html(lvl.under)
	Player.reset();
	Criminal.reset();
	//canvas.drawImage({source: "Assets/Images/"+lvl.back , fromCenter: false});
	//pintcanvas.drawImage({source: "Assets/Images/badguy.png" , x: 480/2 , y:300/2});
	for (var i = 0, c = Player.evolution.length; i < c; i++) {
		if (Evolution[Player.evolution[i]].display) {
			var a = $('<a href="#" id="e'+i+'" class="button evolutionb"></a>').appendTo($("#Pannel"))
				.addClass(Evolution[Player.evolution[i]].class)
				.html(Evolution[Player.evolution[i]].txt)
				.attr("data-Evo",Player.evolution[i])
				.on("click",useEvolution);
		}
	}
}

//var canvas = ""
$().ready( function() {
	//canvas = $("#GWindow")
	initlevel(Levelone)
	$("#Planet").show("slow");
}
)
