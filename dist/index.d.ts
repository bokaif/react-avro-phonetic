import React from 'react';

interface Match {
    type: string;
    scope: string;
    negative?: boolean;
    value?: string;
}
interface Rule {
    matches: Match[];
    replace: string;
}
interface Pattern {
    find: string;
    replace: string;
    rules?: Rule[];
}

declare class AvroPhonetic {
    data: {
        patterns: Pattern[];
        vowel: string;
        consonant: string;
        casesensitive: string;
    };
    fixString(input: string): string;
    isVowel(c: string): boolean;
    isConsonant(c: string): boolean;
    isPunctuation(c: string): boolean;
    isExact(needle: string, heystack: string, start: number, end: number, not: boolean | undefined): boolean;
    isCaseSensitive(c: string): boolean;
    parse(input: string): string;
}

interface AvroInputProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    onValueChange?: (value: string) => void;
    /**
     * If true, minimal default styles (glassmorphism) will be applied.
     * Set to false if you want complete control via className.
     * @default true
     */
    useDefaultStyles?: boolean;
}
declare const AvroInput: React.ForwardRefExoticComponent<AvroInputProps & React.RefAttributes<HTMLTextAreaElement>>;

declare const avro: AvroPhonetic;
declare function parse(input: string): string;

export { AvroInput, type AvroInputProps, avro as default, parse };
