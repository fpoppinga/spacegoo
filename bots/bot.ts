export interface Action {
    toString(): string;
}

const nop: Action = {
    toString(): string {
        return "nop";
    }
};

class Send implements Action {
    constructor(readonly sourcePlanetId: number, readonly targetPlanetId: number, readonly  a: number, readonly b: number,readonly  c: number) {}

    toString() {
        return `send ${this.sourcePlanetId} ${this.targetPlanetId} ${this.a} ${this.b} ${this.c}`;
    };
}

type PlanetId = number;
type PlayerId = number;
type FleetId = number;

interface Fleet {
    id: FleetId,
    owner_id: PlayerId,
    origin: PlanetId,
    target: PlanetId,
    ships: [number, number, number],
    eta: number
}

interface Player {
    id: PlayerId,
    name: string,
    itsme: boolean
}

interface Planet {
    id: PlanetId,
    ownerId: PlayerId,
    x: number,
    y: number,
    ships: [number, number, number],
    production: [number, number, number]
}

interface GameState {
    game_over: boolean;
    winner: PlayerId | null;
    round: number;
    max_rounds: number;
    fleets: Fleet[];
    players: Player[];
    planets: Planet[];
}

interface Bot {
    play(state: GameState): Action
}

