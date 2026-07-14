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
    /**
     * Inline styles for the dropdown menu
     */
    dropdownStyle?: CSSProperties;
    /**
     * Inline styles for each item in the dropdown
     */
    itemStyle?: CSSProperties;
    /**
     * Inline styles for the active item in the dropdown
     */
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
        onBlur: () => void;
    };
    suggestions: string[];
    activeIndex: number;
    isSuggesting: boolean;
    caretCoords: {
        top: number;
        left: number;
        height: number;
    };
    replaceWord: (suggestion: string) => void;
    setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
};

declare const avro: AvroPhonetic;
declare function parse(input: string): string;

export { Avro, AvroInput, type AvroInputProps, type AvroProps, type UseAvroProps, avro as default, parse, useAvro };
