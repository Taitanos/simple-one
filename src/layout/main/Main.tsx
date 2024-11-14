import React from "react";
import styled from "styled-components";
import {MobileMain} from "./MobileMain";
import {DesktopMain} from "./DesktopMain";

export const Main: React.FC = () => {

    const [width, setWidth] = React.useState(window.innerWidth)
    const breakpoint = 768

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener('resize', handleWindowResize)

        return () => window.removeEventListener('resize', handleWindowResize)
    }, [])

    return (
        <MainStyled>
            {width < breakpoint ? <MobileMain/> : <DesktopMain/>}
        </MainStyled>
    );
};


const MainStyled = styled.div`

`