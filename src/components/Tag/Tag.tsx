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
    onClick?: (index: number) => void;
};

const Tag: React.FC<TagProps> = ({ colour, bgColour, pill, size, text, className, textClasses, onRemove, onClick, index }) => {
    
    const handleTagRemove = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        if (onRemove && index !== undefined && index >= 0) {
            onRemove(index);
        }
    };

    const handleTagClick = (e: React.MouseEvent<HTMLSpanElement>) => {
        if (onClick && index !== undefined && index >= 0) {
            onClick(index);
        }
    };
    
    return (
        <div
            className={`tag-container ${onClick ? 'tag-clickable' : ''} ${pill ? 'br-pill' : ''} ${className ? className : ''}`}
            style={{
                color: colour ? colour : '#FFF',
                backgroundColor: bgColour ? bgColour : '#000',
                fontSize: size && size === "small" ? '8px' : '12px'
            }}
        >
            <span 
                className={`${onClick ? 'clickable pointer': ''} ${textClasses ? textClasses : ''}`}
                onClick={onClick ? handleTagClick : undefined}
            >
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