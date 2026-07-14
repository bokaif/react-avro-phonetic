import React, { CSSProperties } from "react";
import { Avro } from "./components/Avro";

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
    ({ className, onValueChange, useDefaultStyles = true, style, onChange, ...props }, ref) => {
        
        const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
            if (onChange) onChange(e);
            if (onValueChange) onValueChange(e.target.value);
        };

        return (
            <Avro>
                <textarea
                    ref={ref}
                    style={useDefaultStyles ? { ...defaultStyle, ...style } : style}
                    className={className}
                    onChange={handleChange}
                    {...props}
                />
            </Avro>
        );
    }
);

AvroInput.displayName = "AvroInput";
