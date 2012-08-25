
function rand(x) { return Math.floor(Math.random() * (x+1));}

var Criminal = new Human("#BadCard"),
	Player = new Human("#GoodCard")

Player.enemy=Criminal;
Criminal.enemy=Player;

function useEvolution(e) {
	e.preventDefault();
	// determination de l'ordre de passage
	var order = [];
	if (rand(1))
	{
		order.push(Player,Criminal);
	}
	else
	{
		order.push(Criminal,Player);
	}
	// determination de l'attaque de Badguy
	{
		
	}
	
	var evolutionUsed = Evolution[$(this).attr("data-Evo")];
	switch (evolutionUsed.type) 
	{
		case "at": Criminal.hurt(evolutionUsed.value);
		case "rH": Player.health(evolutionUsed.value);
		case "rD": Player.iDef(evolutionUsed.value);
		case "rH": Player.health(evolutionUsed.value);
		case "iH": Player.iHealmax(evolutionUsed.value);
		case "iD": Player.iDefmax(evolutionUsed.value);
	}
	
}

function initlevel(lvl) {
	$("#Pannel").html("")
	$(".page header h1").html(lvl.name)
	$(".page header p").html(lvl.under)
	//canvas.drawImage({source: "Assets/Images/"+lvl.back , fromCenter: false});
	//pintcanvas.drawImage({source: "Assets/Images/badguy.png" , x: 480/2 , y:300/2});
	for (var i = 0, c = Player.evolution.length; i < c; i++) {
		if (Evolution[Player.evolution[i]].display) {
			var a = $('<a href="#" id="e'+i+'" class="pbutton"></a>').appendTo($("#Pannel"))
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
