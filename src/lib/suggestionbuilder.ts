import { DBSearch } from './dbsearch';
import { levenshtein } from './levenshtein';
import { autocorrect, suffixdict } from '../data/dictionaries';
import { AvroRegex } from './avroregex';

export class SuggestionBuilder {
    private dbsearch: DBSearch;
    private max: number;
    private minDistance: number;
    private suffixDict: Record<string, string>;
    private autocorrectDict: Record<string, string>;
    private _candidateSelections: Record<string, string>;
    private _phoneticCache: Record<string, string[]>;
    private _tempCache: Record<string, any>;
    private _pref: { dictEnable: boolean };
    private avroRegex: AvroRegex;

    constructor(dbsearch?: DBSearch, max: number = 10, minDistance: number = 2) {
        this.dbsearch = dbsearch || new DBSearch();
        this.suffixDict = suffixdict;
        this.autocorrectDict = autocorrect;
        this.max = max;
        this.minDistance = minDistance;
        this.avroRegex = new AvroRegex();

        this._candidateSelections = this._loadCandidateSelectionsFromFile();
        this._phoneticCache = {};
        this._tempCache = {};
        this._pref = this._defaultPref();
    }

    private _defaultPref() {
        return { dictEnable: true };
    }

    private _getDictionarySuggestion(e: any): string[] {
        let t: string[] = [];
        e = e.middle.toLowerCase();
        t = this._phoneticCache[e]
            ? this._phoneticCache[e].slice(0)
            : this.dbsearch.search(e);
        return t;
    }

    private _getClassicPhonetic(e: string) {
        return this.avroRegex.parse(e);
    }

    private _correctCase(e: string) {
        return this.avroRegex._fixString(e);
    }

    private _getAutocorrect(e: string, t: any) {
        let n: any = {};
        if (this.autocorrectDict[e]) {
            if (this.autocorrectDict[e] == e) {
                n.corrected = e;
                n.exact = true;
            } else {
                n.corrected = this._getClassicPhonetic(this.autocorrectDict[e]);
                n.exact = false;
            }
        } else {
            let r = this._correctCase(t.middle);
            if (this.autocorrectDict[r]) {
                n.corrected = this._getClassicPhonetic(this.autocorrectDict[r]);
                n.exact = false;
            }
        }
        return n;
    }

    private _separatePadding(e: string) {
        let match = e.match(
            /(^(?::`|\\.`|[\\-\\]~!@#%&*()_=+[{}'";<>\\/?|.,])*?(?=(?:,{2,}))|^(?::`|\\.`|[\\-\\]~!@#%&*()_=+[{}'";<>\\/?|.,])*)(.*?(?:,,)*)((?::`|\\.`|[\\-\\]~!@#%&*()_=+[{}'";<>\\/?|.,])*$)/,
        );
        let t: any = {};
        t.begin = match && match[1] ? match[1] : "";
        t.middle = match && match[2] ? match[2] : e;
        t.end = match && match[3] ? match[3] : "";
        return t;
    }

    private _sortByPhoneticRelevance(e: string, t: string[]) {
        let n = t.slice(0);
        n.sort(function (t, n) {
            let r = levenshtein(e, t),
                i = levenshtein(e, n);
            return i > r ? -1 : r > i ? 1 : 0;
        });
        return n;
    }

    private _addToArray(e: any[], t: any) {
        if (e.indexOf(t) == -1) e.push(t);
    }

    private _convertToUnicodeValue(e: string) {
        let t = "";
        for (let n = 0; n < e.length; n++) {
            let r = e.charCodeAt(n);
            t = r >= 255 ? t + ("\\u0" + r.toString(16)) : t + e.charAt(n);
        }
        return t;
    }

    private _isKar(e: string) {
        if (e.length < 1) return false;
        e = e.charAt(0);
        return /^[\\u09be\\u09bf\\u09c0\\u09c1\\u09c2\\u09c3\\u09c7\\u09c8\\u09cb\\u09cc\\u09c4]$/.test(e);
    }

    private _isVowel(e: string) {
        if (e.length < 1) return false;
        e = e.charAt(0);
        return /^[\\u0985\\u0986\\u0987\\u0988\\u0989\\u098a\\u098b\\u098f\\u0990\\u0993\\u0994\\u098c\\u09e1\\u09be\\u09bf\\u09c0\\u09c1\\u09c2\\u09c3\\u09c7\\u09c8\\u09cb\\u09cc]$/.test(e);
    }

    private _addToTempCache(e: string, t: string, n: string) {
        if (!this._tempCache[e]) {
            this._tempCache[e] = {};
            this._tempCache[e].base = t;
            this._tempCache[e].eng = n;
        }
    }

    private _addSuffix(e: any) {
        let t: string[] = [],
            n = "";
        e = e.middle.toLowerCase();
        let r = e.length,
            a: string[] = [];
        if (this._phoneticCache[e]) a = this._phoneticCache[e].slice(0);
        this._tempCache = {};
        if (r >= 2) {
            for (let o = 1; r >= o; o++) {
                let s = e.substr(o, r),
                    l = this.suffixDict[s];
                if (
                    l &&
                    ((s = e.substr(0, e.length - s.length)), this._phoneticCache[s])
                ) {
                    for (let c = 0; c < this._phoneticCache[s].length; c++) {
                        let u = this._phoneticCache[s][c];
                        n = u.substr(-1);
                        let p = l.substr(0, 1);
                        if (this._isVowel(n) && this._isKar(p)) {
                            n = u + "য়" + l;
                            t.push(n);
                            this._addToTempCache(n, u, s);
                        } else if ("ৎ" == n) {
                            n = u.substr(0, u.length - 1) + "ত" + l;
                            t.push(n);
                            this._addToTempCache(n, u, s);
                        } else if ("ং" == n) {
                            n = u.substr(0, u.length - 1) + "ঙ" + l;
                            t.push(n);
                        } else {
                            n = u + l;
                            t.push(n);
                            this._addToTempCache(n, u, s);
                        }
                    }
                    for (let i in t) a.push(t[i]);
                }
            }
        }
        return a;
    }

    private _joinSuggestion(e: any, t: string[], n: any, r: any) {
        let a: any[] = [];
        if (this._pref.dictEnable) {
            if (e.corrected) {
                a.push(e.corrected);
                if (!e.exact) {
                    t.push(e.corrected);
                }
            }
            if (!this._phoneticCache[r.middle.toLowerCase()] && t.length > 0) {
                this._phoneticCache[r.middle.toLowerCase()] = t.slice(0);
            }
            t = this._addSuffix(r);
            t = this._sortByPhoneticRelevance(n, t);
            for (let i in t) this._addToArray(a, t[i]);
            this._addToArray(a, n);
            n = {};
            n.prevSelection = this._getPreviousSelection(r, a);
            for (let i in a) {
                if (e.exact) {
                    if (e.corrected != a[i]) {
                        a[i] = r.begin + a[i] + r.end;
                    }
                } else {
                    a[i] = r.begin + a[i] + r.end;
                }
            }
            n.words = a;
        } else {
            a.push(n);
            a[0] = r.begin + a[0] + r.end;
            n = {};
            n.words = a;
            n.prevSelection = 0;
        }
        return n;
    }

    private _getPreviousSelection(e: any, t: any[]) {
        let n = e.middle,
            r = n.length,
            i = "";
        if (this._candidateSelections[n]) {
            i = this._candidateSelections[n];
        } else if (r >= 2) {
            for (let a = 1; r > a; a++) {
                let o = n.substr(-a).toLowerCase(),
                    s = this.suffixDict[o];
                if (s) {
                    o = n.substr(0, n.length - o.length);
                    if (this._candidateSelections[o]) {
                        let prevStr = this._candidateSelections[o];
                        i = prevStr.substr(-1);
                        let aStr = s.substr(0, 1);
                        if (this._isVowel(i) && this._isKar(aStr)) {
                            i = prevStr + "য়" + s;
                        } else if ("ৎ" == i) {
                            i = prevStr.substr(0, prevStr.length - 1) + "ত" + s;
                        } else if ("ং" == i) {
                            i = prevStr.substr(0, prevStr.length - 1) + "ঙ" + s;
                        } else {
                            i = prevStr + s;
                        }
                        this._updateCandidateSelection(n, i);
                        break;
                    }
                }
            }
        }
        let nIdx = t.indexOf(i);
        return nIdx < 0 ? 0 : nIdx;
    }

    private _loadCandidateSelectionsFromFile() {
        return {};
    }

    private _saveCandidateSelectionsToFile(selections: any) { }

    private _updateCandidateSelection(e: string, t: string) {
        this._candidateSelections[e] = t;
    }

    public getPref() {
        return this._pref;
    }

    public setPref(e: { dictEnable: boolean }) {
        this._pref = e;
    }

    public stringCommitted(e: string, t: string) {
        if (this._pref.dictEnable) {
            if (this._tempCache[t]) {
                let n = this._tempCache[t].base,
                    r = this._tempCache[t].eng;
                if (!this._candidateSelections[r]) {
                    this._candidateSelections[r] = n;
                    this._saveCandidateSelectionsToFile(this._candidateSelections);
                }
            }
            this._saveCandidateSelectionsToFile(this._candidateSelections);
        }
    }

    public updateCandidateSelection(e: string, t: string) {
        if (this._pref.dictEnable) {
            let n = this._separatePadding(e);
            this._updateCandidateSelection(n.middle, t);
        }
    }

    public suggest(e: string) {
        let t = this._separatePadding(e);
        t.begin = this._getClassicPhonetic(t.begin);
        t.end = this._getClassicPhonetic(t.end);
        let n = this._getClassicPhonetic(t.middle);
        let i = this._getAutocorrect(e, t);
        let r: string[] = [];
        if (this._pref.dictEnable) {
            r = this._getDictionarySuggestion(t);
        }
        return this._joinSuggestion(i, r, n, t);
    }
}