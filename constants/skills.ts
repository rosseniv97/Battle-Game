import { Skill, SkillSet } from "../src/types/Skills";
export const attacks: Skill[] = [
  {
    name: "simple",
    props: {
      damageCoef: 1,
    },
  },
  {
    name: "weak",
    props: {
      damageCoef: 0.5,
    },
  },
  {
    name: "heavy",
    props: {
      damageCoef: 2,
    },
  },
  {
    name: "risky",
    props: {
      damageCoef: 3,
      chanceToMissCoef: 0.5,
      chanceToHitCoef: 0.5,
    },
  },
];

export const defences: Skill[] = [
  {
    name: "heal",
    props: {
      healthRestored: 10,
    },
  },
  {
    name: "power heal",
    props: {
      healthRestored: 20,
    },
  },
  {
    name: "shield",
    props: {
      preventDamage: true,
    },
  },
  {
    name: "counterattack",
    props: {
      reverseDamage: true,
    },
  },
  {
    name: "dodge",
    props: {
      missChanceIncrCoef: 1.5,
    },
  },
];

export const skillPool: SkillSet = {
    attacks,
    defences
}
