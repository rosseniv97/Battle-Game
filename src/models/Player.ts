import { SkillSet, Skill, Attack, Defence } from "../types/Skills";
import { skillPool } from "../../constants/skills";

export default class Player {
  username: string;
  damage: number;
  health: number;
  strength: number;
  constitution: number;
  skills: SkillSet;

  constructor(username: string) {
    let attacks: Skill<Attack>[] = [];
    let defences: Skill<Defence>[] = [];
    for (let i = 0; i < 2; i++) {
      attacks = [
        ...attacks,
        skillPool.attacks[Math.round(3 * Math.random() + 0)],
      ];
      defences = [
        ...defences,
        skillPool.defences[Math.round(4 * Math.random() + 0)],
      ];
    }
    this.username = username;
    this.skills = {
      attacks,
      defences,
    };
    this.constitution = 5 * Math.random() + 5;
    this.strength = 10 * Math.random() + 10;
    this.damage = 1.5 * this.strength;
    this.health = 3 * this.constitution;
  }
}
