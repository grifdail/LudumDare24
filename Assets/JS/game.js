
function rand(x) { return Math.floor(Math.random() * (x+1));}

var Criminal = new Human("#BadCard","Doctor Badguy"),
	Player = new Human("#GoodCard","You")
var actualLevel = 0,
	log = ["","","",""]

Player.enemy=Criminal;
Criminal.enemy=Player;

function updateLog(value,force) {
	
	 if (typeof force === 'undefined') { 
		if (log[3] != value)  {
			log.splice(0,1);
			log.push(value);
		}
    }
    else {
		log.splice(0,1);
		log.push(value)
	}
	$("#log p:eq(0)").html(log[0]);
	$("#log p:eq(1)").html(log[1]);
	$("#log p:eq(2)").html(log[2]);
	$("#log p:eq(3)").html(log[3]);
}

function addEvolution(e) {
	e.preventDefault();
	var clicked = $(this).attr("data-Evo");
	Player.addEvolution(clicked);
	actualLevel++ ;
	initlevel(Level[actualLevel] );
	$(".modal").fadeOut("slow");
	$("#Planet").show("slow");
}

function endWorld() {
	if (Criminal.life <= 0)
	{	
		$("#Planet").hide("slow");
		$('.modal-box').html("<p>You just defeat Doctor BadGuy. <br /> Unfortunatly he run away to another planet</p><p>Wow! You're evolving !!!<br />Choose the evolution you want: </p>");
		for (var i = 0; i < 3; i++) {
			var a = $('<a href="#" id="e'+i+'" class="button evolutionb"></a>').appendTo($(".modal-box"))
				.addClass(Evolution[Level[actualLevel].evolution[i]].class)
				.html(Evolution[Level[actualLevel].evolution[i]].txt)
				.attr("data-Evo",Level[actualLevel].evolution[i])
				.on("click",addEvolution)
				.hover(function() { $("#description").html(Evolution[$(this).attr("data-Evo")].hover)},function() { $("#description").html("")})
		}
		Criminal.addEvolution(Level[actualLevel].evolution[rand(3)]);
		Criminal.iHealmax(25);
		$('<p id="description"></p>').appendTo($(".modal-box"))
		$(".modal").fadeIn("slow");
	}
	else if  (Player.life <=0) 
	{	
		$("#Planet").hide("slow");
		$('.modal-box').html("<p>Doctor BadGuy just defeat you.</p>");
		$('<a href="#" class="button">Retry</a>').appendTo($(".modal-box")).on("click",function(e) {
			e.preventDefault();
			initlevel(Level[actualLevel] );
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
		action.push(PlayerUse,Criminal.ai()/*cue[parseInt(alea)]*/);
	}
	else
	{
		order.push(Criminal,Player);
		action.push(/*cue[parseInt(alea)]*/Criminal.ai(),PlayerUse);
	}
	updateLog("***")
	for (var i=0;i<2;i++)
	{
		console.log("tours de " +order[i].name)
		var evolutionUsed = Evolution[action[i]];
		switch (evolutionUsed.type) 
		{
			case "at": 
				console.log(order[i].name, "attaque")
				updateLog(order[i].name +" attack and deal "+ parseInt(order[Math.abs(i-1)].hurt(evolutionUsed.value)) +" damages.");
				break;
			case "rH": 
				console.log(order[i].name, " se soigne")
				order[i].health(evolutionUsed.value);
				var text = order[i].name +" regain "+ parseInt(evolutionUsed.value) +" health points."
				updateLog(text);
				break;
			case "rD": 
				console.log(order[i].name, "aumment sa deffense")
				order[i].iDef(evolutionUsed.value);
				var text = ((order[i].id=="#GoodCard") ? "Your defense increase." : "Doctor Goodguy's defense increase.");
				updateLog(text);
				break;
			case "aD": 
				console.log(order[i].name, "attaque la deffense")
				order[Math.abs(i-1)].iDef(evolutionUsed.value);
				var text = ((order[i].id=="#BadCard") ? "Your defense decrease." : "Doctor Goodguy's defense decrease.")
				updateLog(text);
				break;
		}
		if (( order[i].life<=0) || ( order[i].enemy.life<=0))
		{
			order[i].updateBar()
			return endWorld();
		}
	}
	console.log("fin du tour " )
	Player.updateBar();
	Criminal.updateBar();
	forcecoup =""
}

function initlevel(lvl) {
	$("#Pannel").html("")
	$(".page header h1").html(lvl.name)
	$(".page header p").html(lvl.under)
	$("body").attr("class",lvl.class)
	Player.reset();
	Criminal.reset();
	updateLog("***",true)
	updateLog("***",true)
	updateLog("***",true)
	updateLog("Welcome to "+lvl.name+".")
	//canvas.drawImage({source: "Assets/Images/"+lvl.back , fromCenter: false});
	//pintcanvas.drawImage({source: "Assets/Images/badguy.png" , x: 480/2 , y:300/2});
	for (var i = 0, c = Player.evolution.length; i < c; i++) {
		if (Evolution[Player.evolution[i]].display) {
			var a = $('<a href="#" id="e'+i+'" class="button evolutionb"></a>').appendTo($("#Pannel"))
				.addClass(Evolution[Player.evolution[i]].class)
				.html(Evolution[Player.evolution[i]].txt)
				.attr("data-Evo",Player.evolution[i])
				.on("click",useEvolution)
				.on("mouseover",function() { /*$("#description").html*/updateLog(Evolution[$(this).attr("data-Evo")].hover)})//,function() { $("#description").html("")})
		}
	}
}



//var canvas = ""
$().ready( function() {
	//canvas = $("#GWindow")
	initlevel(Level[actualLevel] );
	$("#Planet").show("slow");
}
)
