import React from "react";
import styled from "styled-components";

export const Header: React.FC = () => {
    return (
        <HeaderStyled>
            Header
        </HeaderStyled>
    )
}

const HeaderStyled = styled.div`
    grid-area: h;
    position: sticky;
    height: 48px;
    border-bottom: 1px solid #d5d8dd;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    background: #fff;
`