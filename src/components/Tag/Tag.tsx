import React from 'react';
import './Tag.scss';

type TagProps = {
    colour?: string;
    bgColour?: string;
    pill?: boolean;
    size?: "small" | "large";
    className?: string;
    textClasses?: string;
    index?: number;
    text: string;
    onRemove?: (index: number) => void;
};

const Tag: React.FC<TagProps> = ({ colour, bgColour, pill, size, text, className, textClasses, onRemove, index }) => {
    
    const handleTagRemove = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        if (onRemove && index !== undefined && index >= 0) {
            onRemove(index);
        }
    };

    return (
        <div
            className={`tag-container ${pill ? 'br-pill' : ''} ${className ? className : ''}`}
            style={{
                color: colour ? colour : '#FFF',
                backgroundColor: bgColour ? bgColour : '#000',
                fontSize: size && size === "small" ? '8px' : '12px'
            }}
        >
            <span className={textClasses ? textClasses : ''}>
                {text}
            </span>
            {
                onRemove
                &&
                <div 
                    className="remove-container flex justify-center items-center ph2 pointer"
                    onClick={handleTagRemove}
                >
                    <img src="/images/icon-remove.svg" alt="remove" />
                </div>
            }
        </div>
    );
}

export default Tag;