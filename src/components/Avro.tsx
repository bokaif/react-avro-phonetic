import React, { CSSProperties } from 'react';
import { useAvro } from '../hooks/useAvro';

export interface AvroProps {
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

const defaultDropdownStyle: CSSProperties = {
    position: 'absolute',
    background: '#2c2c2c',
    border: '1px solid #444',
    borderRadius: '4px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
    zIndex: 9999,
    minWidth: '150px',
    overflow: 'hidden',
    fontFamily: 'sans-serif'
};

const defaultItemStyle: CSSProperties = {
    padding: '8px 12px',
    cursor: 'pointer',
    color: '#fff',
    fontSize: '16px',
};

const defaultActiveItemStyle: CSSProperties = {
    background: '#f99e3a',
    color: '#000'
};

export const Avro: React.FC<AvroProps> = ({ children, dropdownStyle, itemStyle, activeItemStyle }) => {
    // If the child is not a valid React element, return it as is
    if (!React.isValidElement(children)) {
        return <>{children}</>;
    }

    const childElement = children as React.ReactElement<any>;
    const childProps = childElement.props;

    const {
        inputRef,
        bindings,
        suggestions,
        activeIndex,
        isSuggesting,
        caretCoords,
        replaceWord,
        setActiveIndex
    } = useAvro({
        onChange: childProps.onChange,
        onKeyDown: childProps.onKeyDown,
    });

    // Merge refs. The child might already have a ref.
    const handleRef = (node: any) => {
        inputRef.current = node;
        const childRef = (children as any).ref;
        if (typeof childRef === 'function') {
            childRef(node);
        } else if (childRef) {
            childRef.current = node;
        }
    };

    const clonedChild = React.cloneElement(childElement, {
        ref: handleRef,
        onChange: bindings.onChange,
        onKeyDown: bindings.onKeyDown,
        onBlur: (e: any) => {
            if (childProps.onBlur) childProps.onBlur(e);
            bindings.onBlur();
        }
    });

    return (
        <div style={{ position: 'relative', display: 'inline-block', width: '100%' }}>
            {clonedChild}
            {isSuggesting && suggestions.length > 0 && (
                <div
                    style={{
                        ...defaultDropdownStyle,
                        ...dropdownStyle,
                        top: caretCoords.top + caretCoords.height + 5,
                        left: caretCoords.left,
                    }}
                >
                    {suggestions.map((s, idx) => (
                        <div
                            key={`${s}-${idx}`}
                            style={{
                                ...defaultItemStyle,
                                ...itemStyle,
                                ...(idx === activeIndex ? { ...defaultActiveItemStyle, ...activeItemStyle } : {})
                            }}
                            onMouseEnter={() => setActiveIndex(idx)}
                            onMouseDown={(e) => {
                                // Prevent blur of input
                                e.preventDefault();
                                replaceWord(s);
                            }}
                        >
                            {s}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
