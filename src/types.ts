export interface Match {
    type: string;
    scope: string;
    negative?: boolean;
    value?: string;
}

export interface Rule {
    matches: Match[];
    replace: string;
}

export interface Pattern {
    find: string;
    replace: string;
    rules?: Rule[];
}
