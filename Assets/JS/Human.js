
function Human(id) {
	this.Maxlife = 100;
	this.life = 100;
	this.def = 25;
	this.Maxdef = 25;
	this.evolution = ['Attack',"Health"];
	this.enemy = null;
	this.id = id;
	
	this.reset = function() {
		this.life = this.Maxlife;
		this.def = this.Maxdef;
		this.updateBar();
	};
	
	
	
	this.updateBar = function() {
		$(this.id+" .progress span").animate({width:((this.life*100)/this.Maxlife)+"%"});
	}
	
	this.hurt = function(damage) {
		this.life -= (damage-this.def)
		if (this.life <= 0) {	this.life=0	};
		//this.updateBar();
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
		this.updateBar();
	}
	this.usableEvolution = function() {
		var result=[]
		for (var i=0,c=this.evolution.length; i<c; i++) {
			if (Evolution[this.evolution[i]].display) {result.push(this.evolution[i])}
		}
		return result
	}
	
	
}
