export const PERKS = [

/* ================= COMBAT ================= */

{
  id:"gunslinger",
  name:"Gunslinger",
  category:"combat",
  ranks:[
    "+2 Guns, Pistols -1 AP",
    "+3 Guns, Pistols -1 AP",
    "+4 Guns, Pistols -2 AP"
  ],
  req:{ level:3, skills:{ guns:3 } }
},

{
  id:"commando",
  name:"Commando",
  category:"combat",
  ranks:[
    "+2 Guns (Rifles), Ignore 1 DR",
    "+3 Guns (Rifles), Ignore 2 DR",
    "+4 Guns (Rifles), Ignore 3 DR"
  ],
  req:{ level:3, skills:{ guns:3 } }
},

{
  id:"shotgun_surgeon",
  name:"Shotgun Surgeon",
  category:"combat",
  ranks:[
    "Shotguns ignore 2 DR",
    "Shotguns ignore 3 DR",
    "Shotguns ignore 4 DR"
  ],
  req:{ level:6, skills:{ guns:4 } }
},

{
  id:"laser_commander",
  name:"Laser Commander",
  category:"combat",
  ranks:[
    "+1 hit/dmg (Energy)",
    "+2 hit/dmg (Energy)",
    "+3 hit/dmg (Energy)"
  ],
  req:{ level:6, skills:{ energy_weapons:4 } }
},

{
  id:"sniper",
  name:"Sniper",
  category:"combat",
  ranks:[
    "Ignore half-cover",
    "Ignore all cover",
    "Crit on 18–20 at range"
  ],
  req:{ level:6, special:{ PER:2 } }
},


/* ================= STEALTH / MOBILITY ================= */

{
  id:"ninja",
  name:"Ninja",
  category:"stealth_mobility",
  ranks:[
    "+2 Sneak",
    "+1d6 damage from stealth",
    "+2d6 damage from stealth"
  ],
  req:{ level:1 }
},

{
  id:"silent_running",
  name:"Silent Running",
  category:"stealth_mobility",
  ranks:[
    "No Sneak penalty when moving",
    "No penalty when sprinting",
    "No penalty with pistols"
  ],
  req:{ level:1 }
},

{
  id:"backstabber",
  name:"Backstabber",
  category:"stealth_mobility",
  ranks:[
    "+2 unaware damage",
    "+3 unaware damage",
    "+4 unaware damage"
  ],
  req:{ level:3, skills:{ sneak:3 } }
},


/* ================= CRAFTING / SURVIVAL ================= */

{
  id:"strong_back",
  name:"Strong Back",
  category:"crafting",
  ranks:[
    "+30 carry",
    "+60 carry",
    "+90 carry"
  ],
  req:{ level:6, special:{ STR:2 } }
},

{
  id:"survivalist",
  name:"Survivalist",
  category:"crafting",
  ranks:[
    "+2 Survival",
    "+3 Survival",
    "+4 Survival"
  ],
  req:{ level:3, skills:{ survival:3 } }
},

{
  id:"medic",
  name:"Medic",
  category:"crafting",
  ranks:[
    "+2 Medicine",
    "+3 Medicine",
    "+4 Medicine"
  ],
  req:{ level:3, skills:{ medicine:3 } }
},

{
  id:"scientist",
  name:"Scientist",
  category:"crafting",
  ranks:[
    "+2 Science",
    "+3 Science",
    "+4 Science"
  ],
  req:{ level:6, skills:{ science:4 } }
}

];
    "+1 melee dmg, +1 init AGI",
    "+2 melee dmg, +2 init AGI",
    "+3 melee dmg, advantage on crits"
  ],
  req:{ level:9, special:{ STR:2 },
{
  id:"strong_back",
  name:"Strong Back",
  category:"Survival",
  ranks:[
    "+30 carry weight",
    "+60 carry weight",
    "+90 carry weight"
  ],
  req:{ level:6, special:{ STR:2 },
{
  id:"survivalist",
  name:"Survivalist",
  category:"Survival",
  ranks:[
    "+2 Survival, +1 water find",
    "+3 Survival, immune minor hazards",
    "+4 Survival, ignore terrain penalties"
  ],
  req:{ level:3, skills:{ survival:3 },
{
  id:"medic",
  name:"Medic",
  category:"Utility",
  ranks:[
    "+2 Medicine, chems +25%",
    "+3 Medicine, chems +50%",
    "+4 Medicine, chems +75%"
  ],
  req:{ level:3, skills:{ medicine:3 },
{
  id:"repairman",
  name:"Repairman",
  category:"Utility",
  ranks:[
    "+2 Repair",
    "+3 Repair",
    "+4 Repair, free fix/scene"
  ],
  req:{ level:3, skills:{ repair:3 },
{
  id:"scientist",
  name:"Scientist",
  category:"Utility",
  ranks:[
    "+2 Science",
    "+3 Science",
    "+4 Science, bypass systems"
  ],
  req:{ level:6, skills:{ science:4 },
{
  id:"smooth_talker",
  name:"Smooth Talker",
  category:"Social",
  ranks:[
    "+2 Speech",
    "+3 Speech",
    "+4 Speech, reroll fails"
  ],
  req:{ level:3, skills:{ speech:3 },
{
  id:"master_trader",
  name:"Master Trader",
  category:"Social",
  ranks:[
    "+10% better prices",
    "+20% better prices",
    "+30% better prices"
  ],
  req:{ level:6, skills:{ barter:4 },
{
  id:"super_slam",
  name:"Super Slam",
  category:"Combat",
  ranks:[
    "Crits with Melee/Unarmed force END TN 15 or target is knocked prone."
  ],
  req:{ level:1 },
{},
{},
{},
{},
{},
{},
{},
{},
{ PERKS },

  {
    id: "ninja",
    name: "Ninja",
    description: "+2 Sneak. +1d6 damage when striking from stealth with Melee/Unarmed.",
    category: "stealth_mobility",
    ranks: 1,
    requirements: [{ minLevel: 1, minSpecial: {}, minSkills: {} }]
  },
  {
    id: "silent_running",
    name: "Silent Running",
    description: "Sneak suffers no penalty from movement, sprinting, or using pistols.",
    category: "stealth_mobility",
    ranks: 1,
    requirements: [{ minLevel: 1, minSpecial: {}, minSkills: {} }]
  },
  {
    id: "thief",
    name: "Thief",
    description: "+1 Sneak/Lockpick. +2 to steal/pickpocket.",
    category: "stealth_mobility",
    ranks: 1,
    requirements: [{ minLevel: 1, minSpecial: {}, minSkills: {} }]
  },
  {
    id: "action_boy",
    name: "Action Boy",
    description: "Once per encounter, regain all used AP this turn, to be used immediately.",
    category: "stealth_mobility",
    ranks: 1,
    requirements: [{ minLevel: 1, minSpecial: {}, minSkills: {} }]
  },
  {
    id: "ghostwalker",
    name: "Ghostwalker",
    description: "While undetected, gain +2 to all AGI-based rolls.",
    category: "stealth_mobility",
    ranks: 1,
    requirements: [{ minLevel: 1, minSpecial: {}, minSkills: {} }]
  },
  {
    id: "backstabber",
    name: "Backstabber",
    description: "Deal +2 damage when attacking an unaware target (any weapon).",
    category: "stealth_mobility",
    ranks: 1,
    requirements: [{ minLevel: 1, minSpecial: {}, minSkills: {} }]
  },
  {
    id: "tunnel_rat",
    name: "Tunnel Rat",
    description: "Ignore cramped/confined penalties. Count as one size smaller for squeezing.",
    category: "stealth_mobility",
    ranks: 1,
    requirements: [{ minLevel: 1, minSpecial: {}, minSkills: {} }]
  },
  {
    id: "chameleon_skin",
    name: "Chameleon Skin",
    description: "If you stay still for one round, enemies suffer -2 to detect or attack you.",
    category: "stealth_mobility",
    ranks: 1,
    requirements: [{ minLevel: 1, minSpecial: {}, minSkills: {} }]
  }

];
export { PERKS };
