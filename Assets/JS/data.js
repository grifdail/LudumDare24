var Levelone = {
	name:"coooold",
	under:"B1-322c: The ice planet.",
	back:"Background1.png",
}

var Leveltwo = {
	name:"Hooot",
	under:"A8-642: The fire world.",
	back:"Background2.png",
}

var Levelthree= {
	name:"Treeeee",
	under:"T48-DE5d: The vegetal world.",
	back:"Background3.png",
}


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
		txt: "Frozen defense",
		hover:"Throw a powerfull Fireball",
		type: "at",
		value: 50,
		sensibility: 0
	},
	Stalactite: {
		display: false,
		class: "ice",
		txt: "Stalactite",
		hover:"Give you 30 more HP max",
		type: "at",
		value: 30,
		sensibility: 5
	},
	Freeze: {
		display: true,
		class: "ice",
		txt: "Smoke",
		hover:"Improve your deffense by 10",
		type: "rD",
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
		hover:"Give you 30 more HP max",
		type: "iH",
		value: 30,
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
		hover:"Give you 30 more HP max",
		type: "iH",
		value: 30,
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
