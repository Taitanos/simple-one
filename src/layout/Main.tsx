import React from "react";
import styled from "styled-components";

export const Main : React.FC = () => {
    return (
        <MainStyled>
            Основной контент
        </MainStyled>
    )
}

const MainStyled = styled.div`
    padding-top: 16px;
   /* width: 1584px;
    height: 100vh;*/
    border-right: 1px solid #d5d8dd;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    background: #fff;
`