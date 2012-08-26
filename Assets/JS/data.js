
var Level = [ {
	//level 1
	name:"coooold",
	under:"B1-322c: The ice planet.",
	back:"Background1.png",
	class: "frozen",
	evolution: ["FrozenDef","Stalactite","Freeze"]
},{ //level 2
	name:"Hooot",
	under:"A8-642: The fire world.",
	back:"Background2.png",
	class: "burn",
	evolution: ["FireBall","Phenix","Smoke"]
},{ //level 3
	name:"Treeeee",
	under:"T48-DE5d: The vegetal world.",
	back:"Background3.png",
	class: "natural",
	evolution: ["Regeneration","Growing","Solid"]
}

]


var Evolution = {
	
	Attack: {
		display: true,
		class: "basic",
		txt: "Attack",
		hover:"A simple attack",
		type: "at",
		value: 20,
	},
	Health: {
		display: true,
		class: "basic",
		txt: "Healing",
		hover:"Heal 15Hp",
		type: "rH",
		value: 30,
	},
	Concentration: {
		display: true,
		class: "basic",
		txt: "Concentration",
		hover:"improve you defense",
		type: "rD",
		value: -0.1,
	},
	//ffffffffffffffffffffffffffffffffffffffff
	FrozenDef: {
		display: true,
		class: "ice",
		txt: "Ice skin",
		hover:"decrease your enemy defense",
		type: "aD",
		value: +0.1,
	},
	Stalactite: {
		display: true,
		class: "ice",
		txt: "Stalactite",
		hover:"Trow a stalactite to your opponent.",
		type: "at",
		value: 30,
	},
	Freeze: {
		display: false,
		class: "ice",
		txt: "snow",
		hover:"Improve your natural deffense by 10",
		type: "iD",
		value: 0.2
	},
	//ffffffffffffffffffffffffffffffffffffffff
	FireBall: {
		display: true,
		class: "fire",
		txt: "FireBall",
		hover:"Throw a powerfull Fireball",
		type: "at",
		value: 40
	},
	Phenix: {
		display: false,
		class: "fire",
		txt: "Phenix",
		hover:"Give you 50 more HP max",
		type: "iH",
		value: 50,
	},
	Smoke: {
		display: true,
		class: "fire",
		txt: "Smoke",
		hover:"Improve your deffense",
		type: "rD",
		value: -0.2,
	},
	//ffffffffffffffffffffffffffffffffffffffff
	Regeneration: {
		display: true,
		class: "vegetal",
		txt: "Regeneration",
		hover:"Healt you 45hp",
		type: "rH",
		value: 45,
	},
	Growing: {
		display: false,
		class: "vegetal",
		txt: "Growing",
		hover:"Give you 50 more HP max",
		type: "iH",
		value: 50,
	},
	Solid: {
		display: false,
		class: "vegetal",
		txt: "Solidity",
		hover:"Improve your natural deffense.",
		type: "iD",
		value: 0.2,
	}
	//ffffffffffffffffffffffffffffffffffffffff
}
