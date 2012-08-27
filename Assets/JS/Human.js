
var forcecoup = ""

function Human(id,name) {
	this.Maxlife = 100;
	this.life = 100;
	this.def = 1.0
	this.Maxdef = 1.0
	this.evolution = ['Attack',"Health","Concentration"];
	this.enemy = null;
	this.id = id;
	this.name = name;
	this.lastdamaged =100
	this.lasthurted = 0
	
	this.reset = function() {
		this.life = this.Maxlife;
		this.def = this.Maxdef;
		this.lasthurted = this.lasthurted 
		this.lastdamaged = this.enemy.Maxlife;
		this.updateBar();
	};
	
	this.updateBar = function() {
		$(this.id+" .progress span").animate({width:((this.life*100)/this.Maxlife)+"%"},"fast");
	}
	
	this.hurt = function(damage) {
		this.life -= parseInt(damage*this.def)
		if (this.life <= 0) {	this.life=0	};
		this.lasthurted = parseInt(damage*this.def);
		return (damage*this.def)
	};
	
	this.health = function(value) {
		this.life += (value)
		if (this.life > this.Maxlife) {this.life=this.Maxlife	};
		//this.updateBar();
	};
	
	this.iDef = function(value) {
		this.def += (value);
		if (this.def < 0.1)  {this.def = 0.1}
		if (this.def > 5)  {this.def = 5}
		this.lasthurted*= this.def
		return this.def;
	};
	this.iDefmax = function(value) {
		this.Maxdef += (value)
		if (this.Maxdef < 0.1)  {this.Maxdef = 0.1}
		if (this.Maxdef > 5)  {this.Maxdef = 5}
	};
	this.iHealmax = function(value) {
		this.Maxlife += (value)
		this.updateBar();
	};
	this.addEvolution = function(value) {
		if (value in Evolution) { return (this.evolution.push(value));} else { return false;}
		if (Evolution[value] = "iH") {this.iHealmax(Evolution[value].value);}
		if (Evolution[value] = "iD") {this.iDefmax(Evolution[value].value);}
		this.updateBar();
	}
	this.usableEvolution = function() {
		var result=[]
		for (var i=0,c=this.evolution.length; i<c; i++) {
			if (Evolution[this.evolution[i]].display) {result.push(this.evolution[i])}
		}
		return result
	}
	
	this.ai = function() {
		if (forcecoup != "") {return forceoup}
		if (this.life <= this.lasthurted*IAdata[actualLevel] || this.life <(this.Maxlife/4)*IAdata[actualLevel])
		{
			this.lasthurted = 0;
			var healing = 0
			healing = this.evolution.indexOf("Reconstruction");
			if (healing == -1) { healing = this.evolution.indexOf("Wind"); } //Health
			if (healing == -1) { healing = this.evolution.indexOf("Phenix"); } //Health
			if (healing == -1) { healing = this.evolution.indexOf("Health"); } //Health
			return this.evolution[healing]
		}
		else if (this.lasthurted > this.Maxlife/4) //id
		{
			var attack = ""
			attack  = this.evolution.indexOf("Blind");
			if (attack  == -1) { attack  = this.evolution.indexOf("Fly"); } //Health
			if (attack  == -1) { attack  = this.evolution.indexOf("Smoke"); } //Health
			if (attack  == -1) { attack  = this.evolution.indexOf("Concentration"); } //Health
			return this.evolution[attack];
		}
		else if (this.lastdamaged < this.enemy.Maxlife/3)//ad
		{
			this.lastdamaged = this.enemy.Maxlife;
			var attack = ""
			console.log("hello");
			attack  = this.evolution.indexOf("Sandblast");
			if (attack  == -1) { attack  = this.evolution.indexOf("Nightvision"); } //HealthRegeneration
			if (attack  == -1) { attack  = this.evolution.indexOf("Regeneration"); } //Health
			if (attack  == -1) { attack  = this.evolution.indexOf("FrozenDef"); } //Health
			if (attack  == -1) { return this.attackChoice(); } //Health
			return this.evolution[attack];
		}
		else
		{
			return this.attackChoice();
		}
	}
	
	this.attackChoice = function() {
			var attack = ""
			attack  = this.evolution.indexOf("Sandstorm");
			if (attack  == -1) { attack  = this.evolution.indexOf("Shadow"); } //Health
			if (attack  == -1) { attack  = this.evolution.indexOf("FireBall"); } //Health
			if (attack  == -1) { attack  = this.evolution.indexOf("Stalactite"); } //Health
			if (attack  == -1) { attack  = this.evolution.indexOf("Attack"); } //Health
			return this.evolution[attack];
	}
	
	this.levelUp = function() {
		this.iHealmax(25*Math.pow(actualLevel+1,1.5))
		this.iDefmax(0.2)
	}
	
}
