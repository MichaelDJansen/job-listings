import React from 'react';
import './Tag.css'

type TagProps = {
    colour?: string,
    bgColour?: string
    pill?: boolean;
};

const Tag: React.FC<TagProps> = ({colour, bgColour, pill, children}) => {
    return (
        <div 
            className={`tag-container mr1 ttu ${pill ? 'br-pill' : ''}`}
            style={{
                color: colour ? colour : '#FFF',
                backgroundColor: bgColour ? bgColour : '#000'
            }}
        >
            {children}
        </div>
    );
}

export default Tag;