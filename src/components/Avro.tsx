import React, { CSSProperties } from 'react';
import { useAvro } from '../hooks/useAvro';

export interface AvroProps {
    children: React.ReactElement;
    /** unused, kept for API compat */
    dropdownStyle?: CSSProperties;
    itemStyle?: CSSProperties;
    activeItemStyle?: CSSProperties;
}

export const Avro: React.FC<AvroProps> = ({ children }) => {
    if (!React.isValidElement(children)) return <>{children}</>;

    const childElement = children as React.ReactElement<any>;
    const childProps = childElement.props;

    const { inputRef, bindings } = useAvro({
        onChange: childProps.onChange,
        onKeyDown: childProps.onKeyDown,
    });

    const handleRef = (node: any) => {
        inputRef.current = node;
        const childRef = (children as any).ref;
        if (typeof childRef === 'function') childRef(node);
        else if (childRef) childRef.current = node;
    };

    const clonedChild = React.cloneElement(childElement, {
        ref: handleRef,
        onChange: bindings.onChange,
        onKeyDown: bindings.onKeyDown,
    });

    return <div style={{ position: 'relative', display: 'inline-block', width: '100%' }}>{clonedChild}</div>;
};
