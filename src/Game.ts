import Player from "./models/Player";
import { State } from "./types/Game";

export default class Game {
  state: State;
  constructor(players: Player[]) {
    this.state = {
      attacking: players[0],
      defending: players[1],
      chanceToMissDefault: 0.4,
    };
  }

  play(): Player {
    while (this.state.attacking.health > 0 && this.state.defending.health > 0) {
      const [
        PlayerAttack,
        PlayerDefend,
        {
          name: defendingSkillName,
          props: {
            healthRestored,
            preventDamage,
            reverseDamage,
            missChanceIncrCoef,
          },
        },
        {
          name: attackingSkillName,
          props: { damageCoef, chanceToMiss: chanceToMissAttacking },
        },
      ] = [
        this.state.attacking,
        this.state.defending,
        this.state.defending.skills.defences[0],
        this.state.attacking.skills.attacks[0],
      ];

      console.log(
        PlayerAttack.username + " - " + "Attacking Skill: " + attackingSkillName
      );
      console.log(
        PlayerDefend.username + " - " + "Defending Skill: " + defendingSkillName
      );
      const chanceToMiss = chanceToMissAttacking
        ? chanceToMissAttacking
        : missChanceIncrCoef
        ? this.state.chanceToMissDefault * missChanceIncrCoef
        : this.state.chanceToMissDefault;
      const miss = 10 * Math.random() < 10 * chanceToMiss;

      if (miss) {
        console.log(`Shot was missed by ${PlayerAttack.username}`);
        console.log(`${PlayerAttack.username}: ${PlayerAttack.health} health`);
        console.log(`${PlayerDefend.username}: ${PlayerDefend.health} health`);
        this.turn(PlayerDefend, PlayerAttack);
        continue;
      }
      switch (defendingSkillName) {
        case "heal":
          {
            PlayerDefend.health -=
              PlayerAttack.damage * damageCoef - (healthRestored ?? 0);
          }
          break;
        case "power heal":
          {
            PlayerDefend.health -=
              PlayerAttack.damage * damageCoef - 2 * (healthRestored ?? 0);
          }
          break;
        case "shield":
          {
            if (preventDamage)
              console.log(
                `${PlayerDefend.username} was protected by the shield`
              );
          }
          break;
        case "counterattack":
          {
            PlayerDefend.health -= PlayerAttack.damage * damageCoef;
            if (reverseDamage)
              PlayerAttack.health -= PlayerAttack.damage * damageCoef;
          }
          break;
        case "dodge":
          {
            PlayerDefend.health -= PlayerAttack.damage * damageCoef;
            PlayerAttack.health -= PlayerAttack.damage * damageCoef;
          }
          break;
        default: {
        }
      }
      console.log(
        `${PlayerAttack.username}: ${PlayerAttack.health} health\n${PlayerDefend.username}: ${PlayerDefend.health} health`
      );
      this.turn(PlayerDefend, PlayerAttack);
    }
    return this.state.attacking.health <= 0
      ? this.state.defending
      : this.state.attacking;
  }

  turn(PlayerDefend: Player, PlayerAttack: Player): void {
    this.state.attacking = PlayerDefend;
    this.state.defending = PlayerAttack;
    const alreadyPlayedAttackCpy = {
      ...this.state.attacking.skills.attacks[0],
    };
    const alreadyPlayedDefenceCpy = {
      ...this.state.defending.skills.defences[0],
    };
    this.state.attacking.skills.attacks[0] =
      this.state.attacking.skills.attacks[
        this.state.attacking.skills.attacks.length - 1
      ];
    this.state.attacking.skills.attacks[
      this.state.attacking.skills.attacks.length - 1
    ] = alreadyPlayedAttackCpy;
    this.state.defending.skills.defences[0] =
      this.state.defending.skills.defences[
        this.state.defending.skills.defences.length - 1
      ];
    this.state.defending.skills.defences[
      this.state.defending.skills.defences.length - 1
    ] = alreadyPlayedDefenceCpy;
  }
}
