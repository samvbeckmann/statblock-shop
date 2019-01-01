import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
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
  },
  getters: {
    active_monster: state => { 
        return state.monster_list[state.active_monster_id]
    }
  },
  mutations: {
    updateActiveMonsterId (state, n) {
      state.active_monster_id = n
    },

    makeNewBasicInfo(state, index) {
      console.log(index)
      state.monster_list[state.active_monster_id]
        .basic_info
        .splice(index, 0, {name: "", desc: ""})
    },

    removeBasicInfo(state, index) {
      state.monster_list[state.active_monster_id]
        .basic_info
        .splice(index, 1)
    },

    makeNewTrait(state, index) {
      console.log(index)
      state.monster_list[state.active_monster_id]
        .traits
        .splice(index, 0, {name: "", desc: ""})
    },

    removeTrait(state, index) {
      state.monster_list[state.active_monster_id]
        .traits
        .splice(index, 1)
    },

    changeAbilityType(state, index, newType) {

    },

    makeNewAbility(state, index) {

    },

    removeAbility(state, index) {
      
    }
  }
});