
// perks.js - cleaned and fixed

export const PERKS = [

  // Combat
  {
    id:"gunslinger",
    name:"Gunslinger",
    category:"Combat",
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
    category:"Combat",
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
    category:"Combat",
    ranks:[
      "Shotguns ignore 2 DR",
      "Shotguns ignore 3 DR",
      "Shotguns ignore 4 DR"
    ],
    req:{ level:6, skills:{ guns:4 } }
  },

  // Stealth / Mobility
  {
    id: "ninja",
    name: "Ninja",
    category: "stealth_mobility",
    ranks: [
      "+2 Sneak. +1d6 damage when striking from stealth with Melee/Unarmed."
    ],
    req:{ level:1 }
  },

  {
    id: "silent_running",
    name: "Silent Running",
    category: "stealth_mobility",
    ranks: [
      "Sneak suffers no penalty from movement, sprinting, or using pistols."
    ],
    req:{ level:1 }
  },

  {
    id: "thief",
    name: "Thief",
    category: "stealth_mobility",
    ranks: [
      "+1 Sneak/Lockpick. +2 to steal/pickpocket."
    ],
    req:{ level:1 }
  },

  {
    id: "action_boy",
    name: "Action Boy",
    category: "stealth_mobility",
    ranks: [
      "Once per encounter, regain all used AP this turn."
    ],
    req:{ level:1 }
  },

  {
    id: "ghostwalker",
    name: "Ghostwalker",
    category: "stealth_mobility",
    ranks: [
      "While undetected, gain +2 to all AGI-based rolls."
    ],
    req:{ level:1 }
  },

  {
    id: "backstabber",
    name: "Backstabber",
    category: "stealth_mobility",
    ranks: [
      "Deal +2 damage when attacking an unaware target (any weapon)."
    ],
    req:{ level:1 }
  },

  {
    id: "tunnel_rat",
    name: "Tunnel Rat",
    category: "stealth_mobility",
    ranks: [
      "Ignore cramped/confined penalties. Count as one size smaller for squeezing."
    ],
    req:{ level:1 }
  },

  {
    id: "chameleon_skin",
    name: "Chameleon Skin",
    category: "stealth_mobility",
    ranks: [
      "If you stay still for one round, enemies suffer -2 to detect or attack you."
    ],
    req:{ level:1 }
  }

];
