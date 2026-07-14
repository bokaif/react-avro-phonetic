import { patterns, vowel, consonant, casesensitive } from './data';
import { Pattern, Rule, Match } from './types';

export { Pattern }; // Re-export Pattern if needed by consumers

export class AvroPhonetic {
    data = { patterns, vowel, consonant, casesensitive };

    fixString(input: string): string {
        let fixed = '';
        for (let i = 0; i < input.length; ++i) {
            const cChar = input.charAt(i);
            if (this.isCaseSensitive(cChar)) {
                fixed += cChar;
            } else {
                fixed += cChar.toLowerCase();
            }
        }
        return fixed;
    }

    isVowel(c: string): boolean {
        return this.data.vowel.indexOf(c.toLowerCase()) >= 0;
    }

    isConsonant(c: string): boolean {
        return this.data.consonant.indexOf(c.toLowerCase()) >= 0;
    }

    isPunctuation(c: string): boolean {
        return !(this.isVowel(c) || this.isConsonant(c));
    }

    isExact(needle: string, heystack: string, start: number, end: number, not: boolean | undefined): boolean {
        const match = (start >= 0 && end < heystack.length && heystack.substring(start, end) === needle);
        return match !== (!!not);
    }

    isCaseSensitive(c: string): boolean {
        return this.data.casesensitive.indexOf(c.toLowerCase()) >= 0;
    }

    parse(input: string): string {
        const fixed = this.fixString(input);
        let output = "";
        for (let cur = 0; cur < fixed.length; ++cur) {
            let start = cur;
            let end = cur + 1;
            let prev = start - 1;
            let matched = false;

            for (let i = 0; i < this.data.patterns.length; ++i) {
                const pattern = this.data.patterns[i];
                end = cur + pattern.find.length;

                if (end <= fixed.length && fixed.substring(start, end) === pattern.find) {
                    prev = start - 1;
                    if (pattern.rules) {
                        for (let j = 0; j < pattern.rules.length; ++j) {
                            const rule = pattern.rules[j];
                            let replace = true;
                            let chk = 0;

                            for (let k = 0; k < rule.matches.length; ++k) {
                                const match = rule.matches[k];
                                if (match.type === "suffix") {
                                    chk = end;
                                } else {
                                    chk = prev;
                                }

                                let negative = match.negative;
                                let scope = match.scope;

                                if (typeof negative === 'undefined') {
                                    negative = false;
                                    if (scope.charAt(0) === '!') {
                                        negative = true;
                                        scope = scope.substring(1);
                                    }
                                }
                                if (typeof match.value === 'undefined') match.value = '';

                                if (scope === "punctuation") {
                                    const cond = (
                                        ((chk < 0) && (match.type === "prefix")) ||
                                        ((chk >= fixed.length) && (match.type === "suffix")) ||
                                        this.isPunctuation(fixed.charAt(chk))
                                    );
                                    if (!(cond !== negative)) {
                                        replace = false;
                                        break;
                                    }
                                } else if (scope === "vowel") {
                                    const cond = (
                                        (
                                            (chk >= 0 && (match.type === "prefix")) ||
                                            (chk < fixed.length && (match.type === "suffix"))
                                        ) &&
                                        this.isVowel(fixed.charAt(chk))
                                    );
                                    if (!(cond !== negative)) {
                                        replace = false;
                                        break;
                                    }
                                } else if (scope === "consonant") {
                                    const cond = (
                                        (
                                            (chk >= 0 && (match.type === "prefix")) ||
                                            (chk < fixed.length && (match.type === "suffix"))
                                        ) &&
                                        this.isConsonant(fixed.charAt(chk))
                                    );
                                    if (!(cond !== negative)) {
                                        replace = false;
                                        break;
                                    }
                                } else if (scope === "exact") {
                                    let s, e;
                                    if (match.type === "suffix") {
                                        s = end;
                                        e = end + (match.value?.length || 0);
                                    } else {
                                        s = start - (match.value?.length || 0);
                                        e = start;
                                    }
                                    if (!this.isExact(match.value || '', fixed, s, e, negative)) {
                                        replace = false;
                                        break;
                                    }
                                }
                            }

                            if (replace) {
                                output += rule.replace;
                                cur = end - 1;
                                matched = true;
                                break;
                            }
                        }
                    }

                    if (matched) break;

                    output += pattern.replace;
                    cur = end - 1;
                    matched = true;
                    break;
                }
            }

            if (!matched) {
                output += fixed.charAt(cur);
            }
        }
        return output;
    }
}
