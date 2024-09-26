

export interface Weight {
    minimum: string;
    maximum: string;
}

export interface Height {
    minimum: string;
    maximum: string;
}

export interface Fast {
    name: string | undefined;
    damage: string | undefined;
}

export interface Attacks {
    fast: Fast[];
}