import React from 'react';
import './Tag.scss';

type TagProps = {
    colour?: string,
    bgColour?: string
    pill?: boolean;
    size?: string;
    className?: string;
};

const Tag: React.FC<TagProps> = ({ colour, bgColour, pill, size, className, children }) => {
    return (
        <div
            className={`tag-container mr1 pa1 ${pill ? 'br-pill' : ''} ${className ? className : ''}`}
            style={{
                color: colour ? colour : '#FFF',
                backgroundColor: bgColour ? bgColour : '#000',
                fontSize: size && size === "small" ? '8px' : '10px'
            }}
        >
            {children}
        </div>
    );
}

export default Tag;