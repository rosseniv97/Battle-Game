export interface Attack {
  damageCoef: number;
  chanceToMiss?: number;
}

export interface Defence {
  healthRestored?: number;
  preventDamage?: boolean;
  reverseDamage?: boolean;
  missChanceIncrCoef?: number;
}

export interface Skill<SkillType> {
  name: string;
  props: SkillType;
}

export interface SkillSet {
  attacks: Skill<Attack>[];
  defences: Skill<Defence>[];
}
