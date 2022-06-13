import Player from "../models/Player";
export interface State {
    attacking: Player
    defending: Player
    chanceToMissDefault: number
}