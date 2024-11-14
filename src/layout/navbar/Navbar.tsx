import React from "react";
import styled from "styled-components";
import {TabletMenu} from "./TabletMenu";
import {DesktopMenu} from "./DesktopMenu";


export const Navbar: React.FC = () => {

    const [width, setWidth] = React.useState(window.innerWidth)
    const breakpoint = 960

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener('resize', handleWindowResize)

        return () => window.removeEventListener('resize', handleWindowResize)
    }, [])

    return (
        <NavbarStyled>
            {width < breakpoint ? <TabletMenu/> : <DesktopMenu/>}
        </NavbarStyled>
    )
}

const NavbarStyled = styled.div`

`