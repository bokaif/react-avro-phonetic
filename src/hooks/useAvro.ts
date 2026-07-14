import React, { useState, useRef, useEffect, useCallback } from 'react';
import getCaretCoordinates from 'textarea-caret';
import { parse } from '../index';
import { getSuggestions } from '../suggestor';

export interface UseAvroProps {
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export function useAvro(props?: UseAvroProps) {
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isSuggesting, setIsSuggesting] = useState(false);
    const [caretCoords, setCaretCoords] = useState({ top: 0, left: 0, height: 0 });
    
    const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement | any>(null);
    const activeWordData = useRef<{ word: string, start: number, end: number } | null>(null);

    const updateSuggestions = useCallback(() => {
        const el = inputRef.current;
        if (!el || typeof el.selectionStart !== 'number') return;

        const val = el.value;
        const cur = el.selectionStart;

        // Find start of current word
        let start = cur - 1;
        while (start >= 0 && !/\s/.test(val.charAt(start))) {
            start--;
        }
        start++;

        // Find end of current word
        let end = cur;
        while (end < val.length && !/\s/.test(val.charAt(end))) {
            end++;
        }

        if (start < cur) {
            const word = val.substring(start, cur);
            activeWordData.current = { word, start, end: cur };
            
            const newSuggestions = getSuggestions(word, parse);
            setSuggestions(newSuggestions);
            setActiveIndex(0);
            setIsSuggesting(true);

            // Calculate coordinates
            const coords = getCaretCoordinates(el, cur);
            setCaretCoords(coords);
        } else {
            setIsSuggesting(false);
            activeWordData.current = null;
        }
    }, []);

    const replaceWord = useCallback((suggestion: string) => {
        const el = inputRef.current;
        if (!el || !activeWordData.current) return;

        const { start, end } = activeWordData.current;
        const val = el.value;
        
        const prefix = val.substring(0, start);
        const suffix = val.substring(end);
        
        const newValue = prefix + suggestion + suffix;
        
        // Native value setter to trigger standard React onChange pipeline if possible
        const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value")?.set;
        const nativeTextAreaValueSetter = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, "value")?.set;
        
        if (el.tagName === 'TEXTAREA' && nativeTextAreaValueSetter) {
            nativeTextAreaValueSetter.call(el, newValue);
        } else if (nativeInputValueSetter) {
            nativeInputValueSetter.call(el, newValue);
        } else {
            el.value = newValue;
        }

        // Dispatch input event so React state syncs
        const event = new Event('input', { bubbles: true });
        el.dispatchEvent(event);

        // Adjust cursor
        const newCursorPos = start + suggestion.length;
        setTimeout(() => {
            el.selectionStart = newCursorPos;
            el.selectionEnd = newCursorPos;
            setIsSuggesting(false);
            activeWordData.current = null;
        }, 0);
    }, []);

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (props?.onChange) props.onChange(e);
        updateSuggestions();
    }, [props, updateSuggestions]);

    const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (isSuggesting && suggestions.length > 0) {
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                setActiveIndex((prev) => (prev + 1) % suggestions.length);
                return;
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                setActiveIndex((prev) => (prev - 1 + suggestions.length) % suggestions.length);
                return;
            } else if (e.key === 'Enter' || e.key === 'Tab' || e.key === ' ') {
                e.preventDefault();
                const selected = suggestions[activeIndex];
                replaceWord(selected);
                
                // If it was a space, we want to append the space after replacing
                if (e.key === ' ') {
                    setTimeout(() => {
                        const el = inputRef.current;
                        if (!el) return;
                        const cur = el.selectionStart;
                        const nativeSet = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(el), "value")?.set;
                        if (nativeSet) {
                            nativeSet.call(el, el.value.substring(0, cur) + ' ' + el.value.substring(cur));
                            el.dispatchEvent(new Event('input', { bubbles: true }));
                            el.selectionStart = cur + 1;
                            el.selectionEnd = cur + 1;
                        }
                    }, 0);
                }
                return;
            } else if (e.key === 'Escape') {
                setIsSuggesting(false);
                return;
            }
        }
        
        if (props?.onKeyDown) props.onKeyDown(e);
        
        // Wait for value to update on normal typing
        setTimeout(() => {
            updateSuggestions();
        }, 0);
    }, [isSuggesting, suggestions, activeIndex, replaceWord, props, updateSuggestions]);

    const handleBlur = useCallback(() => {
        // Delay hiding so clicks on suggestions work
        setTimeout(() => {
            setIsSuggesting(false);
        }, 150);
    }, []);

    return {
        inputRef,
        bindings: {
            onChange: handleChange,
            onKeyDown: handleKeyDown,
            onBlur: handleBlur,
        },
        suggestions,
        activeIndex,
        isSuggesting,
        caretCoords,
        replaceWord,
        setActiveIndex
    };
}
