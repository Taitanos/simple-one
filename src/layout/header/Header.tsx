import React from "react";
import styled from "styled-components";
import {TabletHeader} from "./TabletHeader";
import {DesktopHeader} from "./DesktopHeader";

export const Header: React.FC = () => {

    const [width, setWidth] = React.useState(window.innerWidth)
    const breakpoint = 768

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener('resize', handleWindowResize)

        return () => window.removeEventListener('resize', handleWindowResize)
    }, [])

    return (
        <HeaderStyled>
            {width < breakpoint ? <TabletHeader/> : <DesktopHeader/>}
        </HeaderStyled>
    );
};

const HeaderStyled = styled.div`
    width: 100%;
    max-width: 1900px;
    grid-area: h;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    height: 48px;
    border-bottom: 1px solid #d5d8dd;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    background: #fff;
`