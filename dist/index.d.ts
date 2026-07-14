import React, { CSSProperties } from 'react';

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

interface AvroProps {
    children: React.ReactElement;
    /** unused, kept for API compat */
    dropdownStyle?: CSSProperties;
    itemStyle?: CSSProperties;
    activeItemStyle?: CSSProperties;
}
declare const Avro: React.FC<AvroProps>;

interface UseAvroProps {
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}
declare function useAvro(props?: UseAvroProps): {
    inputRef: React.RefObject<any>;
    bindings: {
        onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
        onKeyDown: (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    };
    suggestions: string[];
    activeIndex: number;
    isSuggesting: boolean;
    caretCoords: {
        top: number;
        left: number;
        height: number;
    };
    replaceWord: (_: string) => void;
    setActiveIndex: (_: number) => void;
};

declare class AvroRegex {
    data: any;
    findMode: boolean;
    constructor(findMode?: boolean);
    _fixString(e: string): string;
    _isVowel(e: string): boolean;
    _isConsonant(e: string): boolean;
    _isPunctuation(e: string): boolean;
    _isExact(e: string, t: string, n: number, r: number, i: boolean): boolean;
    _isIgnore(e: string): boolean;
    parse(e: string): string;
}

declare class DBSearch {
    _phoneticData: Record<string, string[]>;
    _regex: AvroRegex;
    constructor();
    search(e: string): string[];
    private _searchInArray;
}

declare class SuggestionBuilder {
    private dbsearch;
    private max;
    private minDistance;
    private suffixDict;
    private autocorrectDict;
    private _candidateSelections;
    private _phoneticCache;
    private _tempCache;
    private _pref;
    private avroRegex;
    constructor(dbsearch?: DBSearch, max?: number, minDistance?: number);
    private _defaultPref;
    private _getDictionarySuggestion;
    private _getClassicPhonetic;
    private _correctCase;
    private _getAutocorrect;
    private _separatePadding;
    private _sortByPhoneticRelevance;
    private _addToArray;
    private _convertToUnicodeValue;
    private _isKar;
    private _isVowel;
    private _addToTempCache;
    private _addSuffix;
    private _joinSuggestion;
    private _getPreviousSelection;
    private _loadCandidateSelectionsFromFile;
    private _saveCandidateSelectionsToFile;
    private _updateCandidateSelection;
    getPref(): {
        dictEnable: boolean;
    };
    setPref(e: {
        dictEnable: boolean;
    }): void;
    stringCommitted(e: string, t: string): void;
    updateCandidateSelection(e: string, t: string): void;
    suggest(e: string): any;
}

declare const avro: AvroPhonetic;
declare function parse(input: string): string;

export { Avro, AvroInput, type AvroInputProps, type AvroProps, SuggestionBuilder, type UseAvroProps, avro as default, parse, useAvro };
