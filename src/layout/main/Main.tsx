import React, {useState} from "react";
import styled from "styled-components";
import {MobileMain} from "./MobileMain";
import {DesktopMain, ModalOverlay, TaskWrapper} from "./DesktopMain";
import {Task} from "../../components/task/Task";



export const Main: React.FC = () => {

    const [isTaskOpen, setIsTaskOpen] = useState(false);
    const openTask = () => setIsTaskOpen(true);
    const closeTask = () => setIsTaskOpen(false);

    const [width, setWidth] = React.useState(window.innerWidth)
    const breakpoint = 768

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener('resize', handleWindowResize)

        return () => window.removeEventListener('resize', handleWindowResize)
    }, [])

    React.useEffect(() => {
        if (isTaskOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        }
    }, [isTaskOpen]);


    return (
        <MainStyled>
            {width < breakpoint ? <MobileMain openTask={openTask}/> : <DesktopMain openTask={openTask}/>}

            {isTaskOpen && (
                <ModalOverlay onClick={closeTask}>
                    <TaskWrapper onClick={(e: any) => e.stopPropagation()}>
                        <Task onClick={closeTask} />
                    </TaskWrapper>
                </ModalOverlay>
            )}
        </MainStyled>
    )
}


const MainStyled = styled.div`

`