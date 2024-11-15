import React from "react";
import styled from "styled-components";
import {Form} from "../../components/form/Form";

type DesktopMainType = {
    openTask: ()=> void
}

export const DesktopMain: React.FC<DesktopMainType> = ({openTask}) => {
    return (
        <MainStyled>
            <HeaderTask>
                <span>Подзадача</span>
                <ButtonForm onClick={openTask}>Создать</ButtonForm>
            </HeaderTask>
            <CreatedTask>
                <ButtonFormApp>Сохранить</ButtonFormApp>
                <ButtonForm>Сохранить и выйти</ButtonForm>
            </CreatedTask>
            <FormContain>
                <Form hasColumn={false}/>
            </FormContain>
        </MainStyled>
    )
}

const MainStyled = styled.div`
    display: grid;
    grid-template-areas: "t x" "m m";
    grid-template-rows: 45px 1fr;
    max-width: 1546px;
    padding: 16px 8px;
    border-right: 1px solid #d5d8dd;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    background: #fff;
`

const HeaderTask = styled.div`
    grid-area: t;
    display: flex;
    height: 64px;
    justify-content: flex-start;
    align-items: center;
`

const CreatedTask = styled.div`
    grid-area: x;
    display: flex;
    height: 64px;
    justify-content: flex-end;
    align-items: center;
`

const FormContain = styled.div`
    grid-area: m;
    width: 100%;
    max-width: 1546px;
`

const ButtonForm = styled.button`
    border: 1px solid #d5d8dd;
    border-radius: 4px;
    padding: 6px 12px;
    margin: 5px;
    height: 32px;
    font-weight: 600;
    font-size: 14px;
    line-height: 143%;
    text-align: center;
    color: #2e3238;
    background-color: #fff;
`

const ButtonFormApp = styled(ButtonForm)`
    background-color: #0078cf;
    color: #fff;
`

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    height: auto;
    overflow-y: auto;
`

export const TaskWrapper = styled.div`
    width: 100%;
    max-width: 960px;
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`