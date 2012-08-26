
function Human(id,name) {
	this.Maxlife = 100;
	this.life = 100;
	this.def = 1.0
	this.Maxdef = 1.0
	this.evolution = ['Attack',"Health"];
	this.enemy = null;
	this.id = id;
	this.name = name
	
	this.reset = function() {
		this.life = this.Maxlife;
		this.def = this.Maxdef;
		this.updateBar();
	};
	
	
	
	this.updateBar = function() {
		$(this.id+" .progress span").animate({width:((this.life*100)/this.Maxlife)+"%"});
	}
	
	this.hurt = function(damage) {
		this.life -= (((damage-this.def)>0) ? (damage-this.def) : 0)
		if (this.life <= 0) {	this.life=0	};
		return (((damage-this.def)>0) ? (damage-this.def) : 0);
	};
	
	this.health = function(value) {
		this.life += (value)
		if (this.life > this.Maxlife) {this.life=this.Maxlife	};
		//this.updateBar();
	};
	
	this.iDef = function(value) {
		this.def += (value)
	};
	this.iDefmax = function(value) {
		this.Maxdef += (value)
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
		if (this.life <= this.Maxlife/4)
		{
			var healing = ""
			healing = this.evolution.indexOf("Regeneration");
			if (healing == -1) { healing = this.evolution.indexOf("Health"); } //Health
			return this.evolution[healing]
		}
		else
		{
			var attack = ""
			attack  = this.evolution.indexOf("FireBall");
			if (attack  == -1) { attack  = this.evolution.indexOf("Stalactite"); } //Health
			if (attack  == -1) { attack  = this.evolution.indexOf("Attack"); } //Health
			return this.evolution[attack];
		}
	}
	
}
