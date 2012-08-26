
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
	
	this.reset = function() {
		this.life = this.Maxlife;
		this.def = this.Maxdef;
		this.updateBar();
	};
	
	
	
	this.updateBar = function() {
		$(this.id+" .progress span").animate({width:((this.life*100)/this.Maxlife)+"%"});
	}
	
	this.hurt = function(damage) {
		this.life -= parseInt(damage*this.def)
		if (this.life <= 0) {	this.life=0	};
		return (damage*this.def)
	};
	
	this.health = function(value) {
		this.life += (value)
		if (this.life > this.Maxlife) {this.life=this.Maxlife	};
		//this.updateBar();
	};
	
	this.iDef = function(value) {
		this.def += (value);
		if (this.def < 0.3)  {this.def = 0.3}
		if (this.def > 2)  {this.def = 2}
		return this.def;
	};
	this.iDefmax = function(value) {
		this.Maxdef += (value)
		if (this.Maxdef < 0.3)  {this.Maxdef = 0.3}
		if (this.Maxdef > 1.9)  {this.Maxdef = 1.9}
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
		if (this.life <= this.Maxlife/4)
		{
			var healing = ""
			healing = this.evolution.indexOf("Regeneration");
			if (healing == -1) { healing = this.evolution.indexOf("Health"); } //Health
			return this.evolution[healing]
		}
		else if (rand(2))
		{
			var attack = ""
			attack  = this.evolution.indexOf("FireBall");
			if (attack  == -1) { attack  = this.evolution.indexOf("Concentration"); } //Health
			return this.evolution[attack];
		}
		else
		{
			var attack = ""
			attack  = this.evolution.indexOf("Smoke");
			if (attack  == -1) { attack  = this.evolution.indexOf("Stalactite"); } //Health
			if (attack  == -1) { attack  = this.evolution.indexOf("Attack"); } //Health
			return this.evolution[attack];
		}
	}
	
}
