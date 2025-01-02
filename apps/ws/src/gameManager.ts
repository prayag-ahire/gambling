import { GameState } from "./type";

export class GameManager {
    state: GameState = "people-can-bet";
    private_instance: GameManager;

    private constructor() {

    }
}