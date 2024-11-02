import React from "react";
import styled from "styled-components";

export const Navbar: React.FC = () => {
    return (
        <NavbarStyled>
            Navbar
        </NavbarStyled>
    )
}

const NavbarStyled = styled.div`
    //display: grid;
    grid-area: n;
    position: sticky;
    width: 336px;
    height: 100vh;
    border-right: 1px solid #d5d8dd;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    background: #fff;
`