import React from "react";
import styled from "styled-components";
import {Button} from "../components/button/Button";
import {Input} from "../components/input/Input";

export const Navbar: React.FC = () => {
    return (
        <NavbarStyled>
            <NavbarMenuStyled>
                <Button margin={"16px"} iconId={"sidebar"} width={"24"} height={"24"} viewBox={"0 0 24 24"} hasBorder={false}/>
                <Button margin={"16px"} iconId={"star"} width={"24"} height={"24"} viewBox={"0 0 24 24"} hasBorder={false}/>
            </NavbarMenuStyled>
            <MenuHeader>
                <Search>
                    <Input/>
                    <Button margin={"0"} iconId={"pin"} width={"20"} height={"20"} viewBox={"0 0 20 20"}/>
                </Search>
                <div>Лишки</div>
            </MenuHeader>
        </NavbarStyled>
    )
}

const NavbarStyled = styled.div`
    grid-area: n;
    display: flex;
    flex-direction: row;
    position: sticky;
    width: 336px;
    height: 100vh;
    border-right: 1px solid #d5d8dd;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
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
const MenuHeader = styled.div`
    display: flex;
    flex-direction: row;
`

const Search = styled.div`
    height: 65px;
`