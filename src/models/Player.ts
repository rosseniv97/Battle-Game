import { SkillSet, Skill } from "../types/Skills";
import { skillPool } from "../../constants/skills";

export default class Player {
  username: string;
  damage: number;
  health: number;
  strength: number;
  constitution: number;
  skills: SkillSet;

  constructor(username: string) {
    let attacks: Skill[] = [];
    let defences: Skill[] = [];
    for (let i = 0; i < 2; i++) {
      attacks = [
        ...attacks,
        skillPool.attacks[Math.floor(3 * Math.random() + 0)],
      ];
      defences = [
        ...defences,
        skillPool.defences[Math.floor(4 * Math.random() + 0)],
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
