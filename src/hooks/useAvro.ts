import React, { useRef, useCallback } from 'react';
import { AvroRegex } from '../lib/avroregex';

export interface UseAvroProps {
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const regex = new AvroRegex();

function getCurrentWord(el: HTMLInputElement | HTMLTextAreaElement) {
    const val = el.value;
    const cur = el.selectionStart ?? 0;

    let start = cur - 1;
    while (start >= 0 && !/\s/.test(val.charAt(start))) {
        start--;
    }
    start++;

    return { word: val.substring(start, cur), start, end: cur };
}

function replaceRange(
    el: HTMLInputElement | HTMLTextAreaElement,
    start: number,
    end: number,
    replacement: string
) {
    const val = el.value;
    const newValue = val.substring(0, start) + replacement + val.substring(end);

    const nativeSet =
        el.tagName === 'TEXTAREA'
            ? Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, 'value')?.set
            : Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')?.set;

    if (nativeSet) {
        nativeSet.call(el, newValue);
    } else {
        el.value = newValue;
    }

    el.dispatchEvent(new Event('input', { bubbles: true }));

    const pos = start + replacement.length;
    el.selectionStart = pos;
    el.selectionEnd = pos;
}

export function useAvro(props?: UseAvroProps) {
    const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement | any>(null);

    const convertCurrentWord = useCallback(() => {
        const el = inputRef.current;
        if (!el) return false;

        const { word, start, end } = getCurrentWord(el);
        if (!word) return false;

        const converted = regex.parse(word);
        if (!converted || converted === word) return false;

        replaceRange(el, start, end, converted);
        return true;
    }, []);

    const handleKeyDown = useCallback(
        (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            if (e.key === ' ' || e.key === 'Enter') {
                const converted = convertCurrentWord();
                if (converted && e.key === ' ') {
                    // let space go through naturally after conversion
                }
            }

            if (props?.onKeyDown) props.onKeyDown(e);
        },
        [convertCurrentWord, props]
    );

    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            if (props?.onChange) props.onChange(e);
        },
        [props]
    );

    return {
        inputRef,
        bindings: {
            onChange: handleChange,
            onKeyDown: handleKeyDown,
        },
        // stub these out so Avro.tsx / useAvro consumers don't break
        suggestions: [] as string[],
        activeIndex: 0,
        isSuggesting: false,
        caretCoords: { top: 0, left: 0, height: 0 },
        replaceWord: (_: string) => {},
        setActiveIndex: (_: number) => {},
    };
}
