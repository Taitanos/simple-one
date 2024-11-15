import React from "react";
import {Icon} from "../icon/Icon";
import styled from "styled-components";

export type UserType = {
    name: string
    showIcon: boolean
}

export const User: React.FC<UserType> = ({name, showIcon}) => {
    return (
        <UserStyled>
            <UserName>
                {name}
            </UserName>
            {showIcon && (
                <Icon iconId={"close"} viewBox={"-10 -2 24 24"}/>
            )}
        </UserStyled>
    );
}

const UserStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    height: 20px;
    border: 1px solid #99d5ff;
    border-radius: 4px;
    padding: 0 8px;
    background-color: #e5f4ff;
    gap: 1px;
`
const UserName = styled.div`
    font-size: 14px;
    text-align: start;
    max-width: 396px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    @media (max-width: 768px) {
        max-width: 150px;
    }
`