import { avroRegexData } from '../data/avroregex';
import { dbSearchRegexData } from '../data/dbsearchregex';

export class AvroRegex {
    data: any;
    findMode: boolean;

    constructor(findMode = false) {
        this.findMode = findMode;
        this.data = findMode ? dbSearchRegexData : avroRegexData;
    }

    _fixString(e: string) {
        for (var t = "", n = 0; n < e.length; ++n) {
            var r = e.charAt(n);
            this._isIgnore(r) ? null : (t += r.toLowerCase());
        }
        return t;
    }

    _isVowel(e: string) {
        return this.data.vowel.indexOf(e.toLowerCase()) >= 0;
    }

    _isConsonant(e: string) {
        return this.data.consonant.indexOf(e.toLowerCase()) >= 0;
    }

    _isPunctuation(e: string) {
        return !(this._isVowel(e) || this._isConsonant(e));
    }

    _isExact(e: string, t: string, n: number, r: number, i: boolean) {
        return (n >= 0 && r < t.length && t.substring(n, r) === e) !== i;
    }

    _isIgnore(e: string) {
        return this.data.ignore ? this.data.ignore.indexOf(e.toLowerCase()) >= 0 : false;
    }

    parse(e: string) {
        if (!e) return "";
        e = this._fixString(e);
        for (var t = "", n = 0; n < e.length; ++n) {
            for (
                var r = n, i = n + 1, a = r - 1, o = false, p2 = 0;
                p2 < this.data.patterns.length;
                ++p2
            ) {
                var s = this.data.patterns[p2];
                i = n + s.find.length;
                if (i <= e.length && e.substring(r, i) == s.find) {
                    if (((a = r - 1), typeof s.rules !== 'undefined'))
                        for (var l = 0; l < s.rules.length; ++l) {
                            for (
                                var c = s.rules[l], u = true, p = 0, h = 0;
                                h < c.matches.length;
                                ++h
                            ) {
                                var d = c.matches[h];
                                p = "suffix" === d.type ? i : a;
                                if (
                                    (typeof d.negative === 'undefined' &&
                                        ((d.negative = false),
                                            "!" === d.scope.charAt(0) &&
                                            ((d.negative = true),
                                                (d.scope = d.scope.substring(1)))),
                                        typeof d.value === 'undefined' && (d.value = ""),
                                        "punctuation" === d.scope)
                                ) {
                                    if (
                                        !(
                                            (0 > p && "prefix" === d.type) ||
                                            (p >= e.length && "suffix" === d.type) ||
                                            this._isPunctuation(e.charAt(p))
                                        ) != d.negative
                                    ) {
                                        u = false;
                                        break;
                                    }
                                } else if ("vowel" === d.scope) {
                                    if (
                                        !(
                                            ((p >= 0 && "prefix" === d.type) ||
                                                (p < e.length && "suffix" === d.type)) &&
                                            this._isVowel(e.charAt(p))
                                        ) != d.negative
                                    ) {
                                        u = false;
                                        break;
                                    }
                                } else if ("consonant" === d.scope) {
                                    if (
                                        !(
                                            ((p >= 0 && "prefix" === d.type) ||
                                                (p < e.length && "suffix" === d.type)) &&
                                            this._isConsonant(e.charAt(p))
                                        ) != d.negative
                                    ) {
                                        u = false;
                                        break;
                                    }
                                } else if ("exact" === d.scope) {
                                    var f;
                                    if (
                                        ("suffix" === d.type
                                            ? ((p = i), (f = i + d.value.length))
                                            : ((p = r - d.value.length), (f = r)),
                                            !this._isExact(d.value, e, p, f, d.negative))
                                    ) {
                                        u = false;
                                        break;
                                    }
                                }
                            }
                            if (u) {
                                if (this.findMode) {
                                    t += c.replace + "(্[যবম])?(্?)([ঃঁ]?)";
                                } else {
                                    t += c.replace;
                                }
                                n = i - 1;
                                o = true;
                                break;
                            }
                        }
                    if (o) break;
                    if (this.findMode) {
                        t += s.replace + "(্[যবম])?(্?)([ঃঁ]?)";
                    } else {
                        t += s.replace;
                    }
                    n = i - 1;
                    o = true;
                    break;
                }
            }
            o || (t += e.charAt(n));
        }
        return t;
    }
}
