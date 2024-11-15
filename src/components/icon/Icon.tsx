import React from 'react';
import iconsSprite from './../../assets/images/icon-sprite.svg';

export type IconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
}

export const Icon: React.FC<IconPropsType> = (props:IconPropsType) => {
    return (
        <svg width={props.width || "24px"} height={props.height || "24px"} viewBox={props.viewBox || "0 0 24 24"} xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
        </svg>
    );
};