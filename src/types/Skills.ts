interface Attack {
  damageCoef: number;
  chanceToMissCoef?: number;
  chanceToHitCoef?: number;
}

interface Defence {
  healthRestored?: number;
  preventDamage?: boolean;
  reverseDamage?: boolean;
  missChanceIncrCoef?: number;
}

export interface Skill {
  name: string;
  props: Attack | Defence;
}

export interface SkillSet {
  attacks: Skill[];
  defences: Skill[];
}
