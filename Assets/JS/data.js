
var Level = [ {
	//level 1
	name:"coooold",
	under:"B1-322c: The ice planet.",
	class: "frozen",
	evolution: ["FrozenDef","Stalactite","Freeze"]
},{ //level 2
	name:"Hooot",
	under:"A8-642: The fire world.",
	class: "burn",
	evolution: ["FireBall","Phenix","Smoke"]
},{ //level 3
	name:"Treeeee",
	under:"T48-DE5d: The vegetal world.",
	class: "natural",
	evolution: ["Regeneration","Growing","Solid"]
},{//level 4
	name:"Wiiind",
	under:"AG-985: The windy world.",
	class: "windy",
	evolution: ["Wind","Fly","Imaterial"]
},{//level 5
	name:"Daaaaark",
	under:"U22-331: The night world.",
	class: "Night",
	evolution: ["Blind","Shadow","Nightvision"]
},{//level 6
	name:"Saaaaaand",
	under:"H48-587: The desert world.",
	class: "sandy",
	evolution: ["Sandstorm","Reconstruction","Sandblast"]
},{//level 6
	name:"The Moon",
	under:"",
	class: "moonlight",
	evolution: []
}
]

var IAevo = [["FrozenDef","Stalactite"],["Phenix","Smoke"],["Regeneration","Growing"],["Imaterial","Wind"],["Shadow","Nightvision"],["Sandblast","Sandstorm"]]
var IAdata = [0.9	,1	,1.2	,1.3	,1.4	,1.5	,1.6	,1.7	,1.8]

var Evolution = {
	
	Attack: {
		display: true,
		class: "basic",
		txt: "Attack",
		hover:"A simple attack.",
		type: "at",
		value: 20,
	},
	Health: {
		display: true,
		class: "basic",
		txt: "Healing",
		hover:"Heal 30 Hp.",
		type: "rH",
		value: 30,
	},
	Concentration: {
		display: true,
		class: "basic",
		txt: "Concentration",
		hover:"Improve your defence.",
		type: "rD",
		value: -0.1,
	},
	//ffffffffffffffffffffffffffffffffffffffff
	//ffffffffffffffffffffffffffffffffffffffff
	//ffffffffffffffffffffffffffffffffffffffff
	FrozenDef: {
		display: true,
		class: "ice",
		txt: "Frozen defence",
		hover:"Decrease your enemy's defence.",
		type: "aD",
		value: +0.1,
	},
	Stalactite: {
		display: true,
		class: "ice",
		txt: "Stalactite",
		hover:"Throw a stalactite to your opponent.",
		type: "at",
		value: 25,
	},
	Freeze: {
		display: false,
		class: "ice",
		txt: "Snow",
		hover:"Improve your natural defence.",
		type: "iD",
		value: 0.2
	},
	//ffffffffffffffffffffffffffffffffffffffff
	//ffffffffffffffffffffffffffffffffffffffff
	//ffffffffffffffffffffffffffffffffffffffff
	FireBall: {
		display: true,
		class: "fire",
		txt: "FireBall",
		hover:"Throw a powerful fireball",
		type: "at",
		value: 50
	},
	Phenix: {
		display: true,
		class: "fire",
		txt: "Phenix",
		hover:"Heal 50 Hp.",
		type: "rH",
		value: 50,
	},
	Smoke: {
		display: true,
		class: "fire",
		txt: "Smoke",
		hover:"Improve your defence.",
		type: "rD",
		value: -0.2,
	},
	//ffffffffffffffffffffffffffffffffffffffff
	//ffffffffffffffffffffffffffffffffffffffff
	//ffffffffffffffffffffffffffffffffffffffff
	Regeneration: {
		display: true,
		class: "vegetal",
		txt: "Ivy",
		hover:"Decrease your enemy's defence.",
		type: "aD",
		value: 0.2,
	},
	Growing: {
		display: false,
		class: "vegetal",
		txt: "Growing",
		hover:"Give you 150 more HP max",
		type: "iH",
		value: 150,
	},
	Solid: {
		display: false,
		class: "vegetal",
		txt: "Solidity",
		hover:"Improve your natural defence.",
		type: "iD",
		value: -0.1,
	},
	//ffffffffffffffffffffffffffffffffffffffff
	//ffffffffffffffffffffffffffffffffffffffff
	//ffffffffffffffffffffffffffffffffffffffff
	Wind: {
		display: true,
		class: "wind",
		txt: "Wind",
		hover:"Heal 90 Hp.",
		type: "rH",
		value: 90,
	},
	Fly: {
		display: true,
		class: "wind",
		txt: "Fly",
		hover:"Improve your defence.",
		type: "rD",
		value: -0.3,
	},
	Imaterial: {
		display: false,
		class: "wind",
		txt: "Imaterial being",
		hover:"Improve your natural defence.",
		type: "iD",
		value: -0.2,
	},
	//ffffffffffffffffffffffffffffffffffffffff
	//ffffffffffffffffffffffffffffffffffffffff
	//ffffffffffffffffffffffffffffffffffffffff
	Blind: {
		display: true,
		class: "dark",
		txt: "Blind",
		hover:"Improve your defence.",
		type: "rD",
		value: -0.4,
	},
	Shadow: {
		display: true,
		class: "dark",
		txt: "Shadow",
		hover:"Your shadow attack the enemy.",
		type: "at",
		value: 90,
	},
	Nightvision: {
		display: true,
		class: "dark",
		txt: "Night vision",
		hover:"Decrease your enemy's defence.",
		type: "aD",
		value: 0.3,
	},
	//ffffffffffffffffffffffffffffffffffffffff
	//ffffffffffffffffffffffffffffffffffffffff
	//ffffffffffffffffffffffffffffffffffffffff
	Sandstorm: {
		display: true,
		class: "sand",
		txt: "Sandstorm",
		hover:"A sandstorm fall upon your opponent.",
		type: "at",
		value: 120,
	},
	Reconstruction: {
		display: true,
		class: "sand",
		txt: "Reconstruction",
		hover:	"Heal 180 Hp.",
		type: "rH",
		value: 180,
	},
	Sandblast: {
		display: true,
		class: "sand",
		txt: "Sandblast",
		hover:"Decrease your enemy's defence.",
		type: "aD",
		value: 0.3,
	},
	//ffffffffffffffffffffffffffffffffffffffff
}
