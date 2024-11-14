import React from "react";
import {Button} from "../../components/button/Button";
import styled from "styled-components";

export const TabletMenu: React.FC = () => {
    return (
        <NavbarStyled>
            <NavbarMenuStyled>
                <Button margin={"16px"} iconId={"sidebar"} width={"24"} height={"24"} viewBox={"0 0 24 24"}
                        hasBorder={false}/>
                <Button margin={"16px"} iconId={"star"} width={"24"} height={"24"} viewBox={"0 0 24 24"}
                        hasBorder={false}/>
            </NavbarMenuStyled>
        </NavbarStyled>
    )
}

const NavbarStyled = styled.div`
    grid-area: n;
    display: flex;
    flex-direction: row;
    position: sticky;
    height: 100vh;
    border-right: 1px solid #d5d8dd;
    background: #fff;
`

const NavbarMenuStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 56px;
    border-right: 1px solid #d5d8dd;
`

