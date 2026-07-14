import { AvroRegex } from './avroregex';
import { avrodict } from '../data/dictionaries';

export class DBSearch {
    _phoneticData = avrodict;
    _regex: AvroRegex;

    constructor() {
        this._regex = new AvroRegex(true);
    }

    public search(e: string): string[] {
        let t: string[] = [];
        switch (e.toLowerCase().charAt(0)) {
            case "a": t = ["a", "aa", "e", "oi", "o", "nya", "y"]; break;
            case "b": t = ["b", "bh"]; break;
            case "c": t = ["c", "ch", "k"]; break;
            case "d": t = ["d", "dh", "dd", "ddh"]; break;
            case "e": t = ["i", "ii", "e", "y"]; break;
            case "f": t = ["ph"]; break;
            case "g": t = ["g", "gh", "j"]; break;
            case "h": t = ["h"]; break;
            case "i": t = ["i", "ii", "y"]; break;
            case "j": t = ["j", "jh", "z"]; break;
            case "k": t = ["k", "kh"]; break;
            case "l": t = ["l"]; break;
            case "m": t = ["h", "m"]; break;
            case "n": t = ["n", "nya", "nga", "nn"]; break;
            case "o": t = ["a", "u", "uu", "oi", "o", "ou", "y"]; break;
            case "p": t = ["p", "ph"]; break;
            case "q": t = ["k"]; break;
            case "r": t = ["rri", "h", "r", "rr", "rrh"]; break;
            case "s": t = ["s", "sh", "ss"]; break;
            case "t": t = ["t", "th", "tt", "tth", "khandatta"]; break;
            case "u": t = ["u", "uu", "y"]; break;
            case "v": t = ["bh"]; break;
            case "w": t = ["o"]; break;
            case "x": t = ["e", "k"]; break;
            case "y": t = ["i", "y"]; break;
            case "z": t = ["h", "j", "jh", "z"]; break;
        }

        const parsedRegex = "^" + this._regex.parse(e) + "$";
        let n: string[] = [];
        
        for (const i in t) {
            const table = avrodict[t[i]];
            if (table) {
                n = n.concat(this._searchInArray(parsedRegex, table));
            }
        }
        return n;
    }

    private _searchInArray(e: string, t: string[]): string[] {
        const n: string[] = [];
        const i = new RegExp(e);
        for (const w in t) {
            const r = t[w];
            if (i.test(r)) {
                n.push(r);
            }
        }
        return n;
    }
}
