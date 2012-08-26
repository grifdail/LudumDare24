
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
		value: 40,
		sensibility: 10
	},
	Health: {
		display: true,
		class: "basic",
		txt: "Healing",
		hover:"Heal about 15Hp",
		type: "rH",
		value: 5,
		sensibility: 5
	},
	FrozenDef: {
		display: true,
		class: "ice",
		txt: "Ice skin",
		hover:"Improve your defense by about 10",
		type: "rd",
		value: 10,
		sensibility: 5
	},
	Stalactite: {
		display: true,
		class: "ice",
		txt: "Stalactite",
		hover:"Trow a stalactite to your opponent.",
		type: "at",
		value: 45,
		sensibility: 20
	},
	Freeze: {
		display: false,
		class: "ice",
		txt: "snow",
		hover:"Improve your natural deffense by 10",
		type: "iD",
		value: 10
	},
	FireBall: {
		display: true,
		class: "fire",
		txt: "FireBall",
		hover:"Throw a powerfull Fireball",
		type: "at",
		value: 50,
		sensibility: 20
	},
	Phenix: {
		display: false,
		class: "fire",
		txt: "Phenix",
		hover:"Give you 50 more HP max",
		type: "iH",
		value: 50,
		sensibility: 0
	},
	Smoke: {
		display: true,
		class: "fire",
		txt: "Smoke",
		hover:"Improve your deffense by 10",
		type: "rD",
		value: 10,
		sensibility: 0
	},
	Regeneration: {
		display: true,
		class: "vegetal",
		txt: "Regeneration",
		hover:"Healt you about 25hp",
		type: "rH",
		value: 25,
		sensibility: 10
	},
	Growing: {
		display: false,
		class: "vegetal",
		txt: "Growing",
		hover:"Give you 0 more HP max",
		type: "iH",
		value: 50,
		sensibility: 0
	},
	Solid: {
		display: false,
		class: "vegetal",
		txt: "Solidity",
		hover:"Improve your natural deffense by 10",
		type: "iD",
		value: 10,
		sensibility: 0
	}
}
