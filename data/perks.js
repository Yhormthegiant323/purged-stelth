export const PERKS = [

/* ================= COMBAT ================= */

{
  id: "gunslinger",
  name: "Gunslinger",
  category: "combat",
  ranks: [
    "+2 Guns, Pistols -1 AP",
    "+3 Guns, Pistols -1 AP",
    "+4 Guns, Pistols -2 AP"
  ],
  req: { level: 3, skills: { guns: 3 } }
},

{
  id: "commando",
  name: "Commando",
  category: "combat",
  ranks: [
    "+2 Guns (Rifles), Ignore 1 DR",
    "+3 Guns (Rifles), Ignore 2 DR",
    "+4 Guns (Rifles), Ignore 3 DR"
  ],
  req: { level: 3, skills: { guns: 3 } }
},

{
  id: "shotgun_surgeon",
  name: "Shotgun Surgeon",
  category: "combat",
  ranks: [
    "Shotguns ignore 2 DR",
    "Shotguns ignore 3 DR",
    "Shotguns ignore 4 DR"
  ],
  req: { level: 6, skills: { guns: 4 } }
},

{
  id: "sniper",
  name: "Sniper",
  category: "combat",
  ranks: [
    "Ignore half-cover",
    "Ignore all cover",
    "Crit on 18–20 at range"
  ],
  req: { level: 6, special: { PER: 2 } }
},

/* ================= STEALTH / MOBILITY ================= */

{
  id: "ninja",
  name: "Ninja",
  category: "stealth_mobility",
  ranks: [
    "+2 Sneak",
    "+1d6 damage from stealth",
    "+2d6 damage from stealth"
  ],
  req: { level: 1 }
},

{
  id: "silent_running",
  name: "Silent Running",
  category: "stealth_mobility",
  ranks: [
    "No Sneak penalty when moving",
    "No penalty when sprinting",
    "No penalty with pistols"
  ],
  req: { level: 1 }
},

{
  id: "backstabber",
  name: "Backstabber",
  category: "stealth_mobility",
  ranks: [
    "+2 unaware damage",
    "+3 unaware damage",
    "+4 unaware damage"
  ],
  req: { level: 3, skills: { sneak: 3 } }
},

/* ================= CRAFTING ================= */

{
  id: "medic",
  name: "Medic",
  category: "crafting",
  ranks: [
    "+2 Medicine",
    "+3 Medicine",
    "+4 Medicine"
  ],
  req: { level: 3, skills: { medicine: 3 } }
},

{
  id: "scientist",
  name: "Scientist",
  category: "crafting",
  ranks: [
    "+2 Science",
    "+3 Science",
    "+4 Science"
  ],
  req: { level: 6, skills: { science: 4 } }
}

];
