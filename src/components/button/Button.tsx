import React from "react";
import { Icon, IconPropsType } from "../icon/Icon";
import styled from "styled-components";

interface ButtonProps extends IconPropsType {
    hasBorder?: boolean;
    margin: string;
}

export const Button: React.FC<ButtonProps> = ({ iconId, viewBox, height, width, hasBorder = true, margin }: ButtonProps) => {
    return (
        <ButtonStyled hasBorder={hasBorder} margin={margin}>
            <Icon iconId={iconId} viewBox={viewBox} height={height} width={width} />
        </ButtonStyled>
    );
};

const ButtonStyled = styled.button<{ hasBorder: boolean; margin: string; }>`
    background: #fff;
    padding: 0;
    border: ${({ hasBorder }) => (hasBorder ? '1px solid #d5d8dd' : 'none')};
    margin: ${({ margin }) => margin};
    border-radius: 4px;
    width: 32px;
    height: 32px;
    cursor: pointer;
`;