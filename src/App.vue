<template>
  <div id="app">
    <navbar></navbar>
    <editor></editor>
  </div>
</template>

<script>
import Navbar from './Navbar.vue'
import Editor from './Editor.vue'

export default {
  name: 'app',
  components: {Navbar, Editor},
  data () {
    return {
      monster_list: [
	{
		"name": "Aarakocra",
		"heading": "Medium humanoid (aarakocra), neutral good",
		"two_column": false,
		"basic_info": [
			{
				"name": "Armor Class",
				"desc": "12"
			},
			{
				"name": "Hit Points",
				"desc": "13 (3d8)"
			},
			{
				"name": "Speed",
				"desc": "20 ft., fly 50 ft."
			}
		],
		"ability_scores": {
			"str": "10",
			"dex": "14",
			"con": "10",
			"int": "11",
			"wis": "12",
			"cha": "11"
		},
		"traits": [
			{
				"name": "Skills",
				"desc": "Perception +5"
			},
			{
				"name": "Senses",
				"desc": "passive Perception 15"
			},
			{
				"name": "Languages",
				"desc": "Aarakocra, Auran"
			},
			{
				"name": "Challenge",
				"desc": "1/4 (50 XP)"
			}
		],
		"content": [
			{
				"property_block": {
					"name": "Dive Attack",
					"desc": "If the aarakocra is flying and dives at least 30 feet straight toward a target and then hits with a melee weapon attack, the attack deals an extra 3 (1d6) damage to the target."
				}
			},
			{
				"subtitle": "Actions"
			},
			{
				"property_block": {
					"name": "Talon",
					"desc": "_Melee Weapon Attack:_ +4 to hit, reach 5 ft., one target. _Hit:_ 4 (1d4 + 2) slashing damage."
				}
			},
			{
				"property_block": {
					"name": "Javelin",
					"desc": "_Melee or Ranged Weapon Attack:_ +4 to hit, reach 5 ft. or range 30/120 ft., one target. _Hit:_ 5 (1d6 + 2) piercing damage."
				}
			}
		]
	},
	{
		"name": "Aboleth",
		"heading": "Large aberration, lawful evil",
		"two_column": true,
		"basic_info": [
			{
				"name": "Armor Class",
				"desc": "17 (natural armor)"
			},
			{
				"name": "Hit Points",
				"desc": "135 (18d10 + 16)"
			},
			{
				"name": "Speed",
				"desc": "20 ft., swim 40 ft."
			}
		],
		"ability_scores": {
			"str": 21,
			"dex": 9,
			"con": 15,
			"int": 18,
			"wis": 15,
			"cha": 18
		},
		"traits": [
			{
				"name": "Saving Throws",
				"desc": "Con +6, Int +8, Wis +6"
			},
			{
				"name": "Skills",
				"desc": "History +12, Perception +10"
			},
			{
				"name": "Senses",
				"desc": "darkvision 120ft., passive Perception 20"
			},
			{
				"name": "Languages",
				"desc": "Deep Speech, telepathy 120 ft."
			},
			{
				"name": "Challenge",
				"desc": "10 (5,900 XP)"
			}
		],
		"content": [
			{
				"property_block": {
					"name": "Amphibious",
					"desc": "The aboleth can breathe air and water."
				}
			},
			{
				"property_block": {
					"name": "Mucous Cloud",
					"desc": "While underwater, the aboleth is surrounded by transformative mucus. A creature that touches the aboleth or that hits it with a melee attack while within 5 feet of it must make a DC 14 Constitution saving throw. On a failure, the creature is diseased for 1d4 hours. The diseased creature can breathe only underwater."
				}
			},
			{
				"property_block": {
					"name": "Probing Telepathy",
					"desc": "If a creature communicates telepahically with the aboleth, the aboleth learns the creature's greatest desires if the aboleth can see the creature."
				}
			},
			{
				"subtitle": "Actions"
			},
			{
				"property_block": {
					"name": "Multiattack",
					"desc": "The aboleth makes three tentacle attacks."
				}
			},
			{
				"property_block": {
					"name": "Tentacle",
					"desc": "_Melee Weapon Attack:_ +9 to hit, reach 10 ft., one target. _Hit:_ 12 (2d6 + 5) bludgeoning damage. If the target is a creature, it must succeed on a DC 14 Constitution saving throw of become diseased. The disease has no effect for 1 minute and can be removed by any magic that cures disease. After 1 minute, the diseased creature's skin becomes translucent and slimy, the creature can't regain hit points unless it is underwater, and the disease can be removed only be _heal_ or another disease-curing spell of 6th level or higher. When the creature is outside a body of water, it takes 6 (1d12) acid damage every 10 minutes unless moisture is applied to the skin before 10 minutes have passed."
				}
			},
			{
				"property_block": {
					"name": "Tail",
					"desc": "_Melee Weapon Attack:_ +9 to hit, reach 10 ft., one target. _Hit:_ 15 (3d6 + 5) bludgeoning damage."
				}
			},
			{
				"property_block": {
					"name": "Enslave (3/Day)",
					"desc": "The aboleth targets one creature it can see within 30 feet of it. The target must succeed on a DC 14 Wisdom saving throw or be magically charmed by the aboleth until the aboleth dies or until it is on a different plane of existence from the target. The charmed creature is under the aboleth's control and can't take reactions, and the aboleth and the target can communicate telepathically with each other over any distance.\\nWhenever the charmed target takes damage, the target can repeat the saving throw. On a success, the effect ends. No more than once every 24 hours, the target can also repeat the saving throw when it is at least 1 mile away from the aboleth."
				}
			},
			{
				"subtitle": "Legendary Actions"
			},
			{
				"text": "The aboleth can take 3 legendary actions, choosing from the options below. Only one legendary action can be used at a time and only at the end of another creature's turn. The aboleth regains spent legendary actions at the start of its turn."
			},
			{
				"property_line": {
					"name": "Detect.",
					"desc": "The aboleth makes a Wisdom (Perception) check."
				}
			},
			{
				"property_line": {
					"name": "Tail Swipe.",
					"desc": "The aboleth makes one tail attack."
				}
			},
			{
				"property_line": {
					"name": "Psychic Drain (Costs 2 Actions).",
					"desc": "One creature charmed by the aboleth takes 10 (3d6) psychic damage, and the aboleth regains hit points equal to the damage the creature takes."
				}
			}
		]
	}],
    active_monster_id: 0
    }
  }
}
</script>

<style lang="scss">
@import './scss/_variables';
@import './scss/_badge-outline';
@import './scss/_editor';
@import './scss/_textexpanding';
@import './scss/_toggles';

.no-side-padding {
    padding-left: 0;
    padding-right: 0
}

.no-rounded-corners {
  border-radius: 0;
}

@mixin invis-top-border($pad) {
  border-top-width: 0;
  padding-top: calc(#{$pad} + 1px);

  &:focus {
    border-top-width: 1px;
    padding-top: $pad;
  }
}

@mixin invis-bottom-border($pad) {
  border-bottom-width: 0;
  padding-bottom: calc(#{$pad} + 1px);

  &:focus {
    border-bottom-width: 1px;
    padding-bottom: $pad;
  }
}

@mixin invis-left-border($pad) {
  border-left-width: 0;
  padding-left: calc(#{$pad} + 1px);

  &:focus {
    border-left-width: 1px;
    padding-left: $pad;
  }
}

@mixin invis-right-border($pad) {
  border-right-width: 0;
  padding-right: calc(#{$pad} + 1px);

  &:focus {
    border-right-width: 1px;
    padding-right: $pad;
  }
}

.no-dup-top {
  @include invis-top-border(0.5rem);
}

.no-dup-bottom {
  @include invis-bottom-border(0.5rem);
}

.no-dup-left {
  @include invis-left-border(0.75rem);
}

.no-dup-right {
  @include invis-right-border(0.75rem);
}

.no-dup-borders {
  @include invis-top-border(0.5rem);
  @include invis-bottom-border(0.5rem);
  @include invis-left-border(0.75rem);
  @include invis-right-border(0.75rem);
}

.border-right {
  border-right: 1px solid $border-grey;
}

#monster-list-col {
  max-width: 450px;
}

.content {
  border: solid 1px lightgrey;
  border-radius: 3px;
  height:600px;
  overflow-y:scroll;
}

.table {
  display: table;
}

.table-name {
  font-weight: bold;
}

.table-desc {
  font-size: 9pt;
  font-variant: small-caps;
  color: #6c6c6c;
}

.table tbody>tr>td.vert-align{
    vertical-align: middle;
}

td.fit {
  width: 1%;
  white-space: nowrap;
}

.outlined {
  border: solid 1px lightgrey;
  border-radius: 3px;
}

.dropdown-container {
  position: relative;
}

#encounter-list {
  max-width: 475px;
  padding-left: 0px;
}

.btn-circle {
  font-weight: bold;
  height: 30px;
  width: 30px;
  min-width: 30px;
  text-align: center;
  padding: 6px 0;
  font-size: 12px;
  line-height: 1.428571429;
  border-radius: 30px;
}

.btn-circle.btn-lg {
  width: 50px;
  height: 50px;
  padding: 10px 16px;
  font-size: 18px;
  line-height: 1.33;
  border-radius: 25px;
}

.btn-circle.btn-xl {
  width: 70px;
  height: 70px;
  padding: 10px 16px;
  font-size: 24px;
  line-height: 1.33;
  border-radius: 35px;
}

.btn-form {
  margin: auto;
  margin-right: 5px;
  margin-left: 5px;
}

.statblock-description {
  max-width: 400px;
  margin-top: 1rem;
}

// Overriding bootstrap for theme settings

.navbar {
  background-color: $gunmetal;
}

.input-group-addon {
  background-color: $offwhite;
}

/* the encounter page */
#statblock-area {
  white-space: nowrap;
  margin-right: 20px;
}

.encounter-statblock {
  padding-left: 20px;
  margin-right: 20px;
  display: inline-block;
  white-space: normal;
  vertical-align: top;
}

</style>
