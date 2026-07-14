
import React, { useRef, useState, useEffect, CSSProperties } from "react";
import { parse } from "./index";

export interface AvroInputProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    onValueChange?: (value: string) => void;
    /**
     * If true, minimal default styles (glassmorphism) will be applied.
     * Set to false if you want complete control via className.
     * @default true
     */
    useDefaultStyles?: boolean;
}

const defaultStyle: CSSProperties = {
    width: '100%',
    padding: '1rem',
    fontSize: '1.25rem',
    borderRadius: '0.75rem',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    outline: 'none',
    resize: 'none',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    backdropFilter: 'blur(12px)',
    transition: 'all 0.2s ease-in-out',
    fontFamily: 'inherit'
};

export const AvroInput = React.forwardRef<HTMLTextAreaElement, AvroInputProps>(
    ({ className, onValueChange, useDefaultStyles = true, style, ...props }, ref) => {
        const [value, setValue] = useState("");
        const innerRef = useRef<HTMLTextAreaElement>(null);
        const cursorRef = useRef<number | null>(null);

        // Allow both internal and external refs
        useEffect(() => {
            if (!ref) return;
            if (typeof ref === 'function') {
                ref(innerRef.current);
            } else {
                ref.current = innerRef.current;
            }
        }, [ref]);

        // Apply cursor position after render if needed
        useEffect(() => {
            if (cursorRef.current !== null && innerRef.current) {
                innerRef.current.selectionStart = cursorRef.current;
                innerRef.current.selectionEnd = cursorRef.current;
                cursorRef.current = null;
            }
        }, [value]);

        const getCaret = (el: HTMLTextAreaElement) => el.selectionStart;

        const findLast = (el: HTMLTextAreaElement, cur: number) => {
            let last = cur - 1;
            while (last > 0) {
                const c = el.value.charAt(last);
                if (/\s/.test(c)) {
                    break;
                }
                last--;
            }
            return last;
        };

        const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
            setValue(e.target.value);
            if (onValueChange) onValueChange(e.target.value);
            if (props.onChange) props.onChange(e); // Forward native onChange
        };

        const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
            if (props.onKeyDown) props.onKeyDown(e); // Forward native onKeyDown
            if (e.defaultPrevented) return;

            if (e.key === " " || e.key === "Enter" || e.key === "Tab") {
                const el = innerRef.current;
                if (!el) return;

                const cur = getCaret(el);
                let last = findLast(el, cur);

                // adjust if finding a space at the start of the check boundary
                if (last >= 0 && /\s/.test(el.value.charAt(last))) {
                    last++;
                }

                if (cur <= last) return;

                const word = el.value.substring(last, cur);
                const bangla = parse(word);

                let delimiter = "";
                if (e.key === " ") delimiter = " ";
                if (e.key === "Enter") delimiter = "\n";

                const prefix = el.value.substring(0, last);
                const suffix = el.value.substring(cur);

                // Explicitly force the delimiter into the new value
                const newValue = prefix + bangla + delimiter + suffix;

                setValue(newValue);
                if (onValueChange) onValueChange(newValue);

                // Calculate where cursor should be
                cursorRef.current = prefix.length + bangla.length + delimiter.length;

                if (e.key !== "Tab") {
                    e.preventDefault();
                }
            }
        };

        return (
            <textarea
                ref={innerRef}
                value={value}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                style={useDefaultStyles ? { ...defaultStyle, ...style } : style}
                className={className}
                {...props}
            />
        );
    }
);

AvroInput.displayName = "AvroInput";
