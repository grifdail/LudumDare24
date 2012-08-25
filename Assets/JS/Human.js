
function Human(id) {
	this.Maxlife = 100;
	this.life = 100;
	this.def = 25;
	this.Maxdef = 25;
	this.evolution = ['Attack'];
	this.enemy = null;
	this.id = id;
	
	this.reset = function() {
		this.life = this.maxLife;
		this.def = this.maxDef;
	};
	
	this.hurt = function(damage) {
		this.life -= (damage-this.def)
		if (this.life <= 0) {	this.life=0	};
		console.log(this.id+" progress")
		$(this.id+" progress").attr("value",((this.life*100)/this.Maxlife));
	};
	
	this.health = function(value) {
		this.life += (value)
		if (this.life > this.Maxlife) {this.life=this.Maxlife	};
		//$(/*this.id+*/" progress").attr("value",(this.life*100)/this.Maxlife);
	};
	
	this.iDef = function(value) {
		this.def += (value)
	};
	this.iDefmax = function(value) {
		this.Maxdef += (value)
	};
	this.iHealmax = function(value) {
		this.Maxlife += (value)
	};
	this.addEvolution = function(value) {
		if (value in Evolution) { return (this.evolution.push(value));} else { return false;}
	}
	this.usableEvolution = function() {
		for (var i=0; i<this.evolution; i++) {
			
		}
	}
	
	
}
