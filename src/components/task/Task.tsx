import React from "react";
import styled from "styled-components";
import { Form } from "../form/Form";

type TaskProps = {
    onClick: () => void
};

export const Task: React.FC<TaskProps> = ({ onClick }) => {
    return (
        <MainStyled>
            <HeaderTask>
                <span>Подзадача</span>
            </HeaderTask>
            <FormContain>
                <Form hasColumn={true}/>
            </FormContain>
            <CreatedTask>
                <ButtonFormApp>Сохранить</ButtonFormApp>
                <ButtonForm onClick={onClick}>Сохранить и выйти</ButtonForm>
            </CreatedTask>
        </MainStyled>
    )
}


const MainStyled = styled.div`
    display: grid;
    grid-template-areas:
        "t"
        "m"
        "x";
    grid-template-rows: auto 1fr auto;
    max-width: 100%;
    padding: 16px 8px;
    margin-top: 16px;
    border-right: 1px solid #d5d8dd;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    background: #fff;
    border-radius: 8px;
    height: 100vh;
    overflow-y: auto;

    @media (min-width: 660px) {
        grid-template-areas:
            "t x"
            "m m";
        grid-template-rows: 45px 1fr;
        margin-top: 0;
    }
`

const HeaderTask = styled.div`
    grid-area: t;
    display: flex;
    height: 64px;
    justify-content: flex-start;
    align-items: center;
`

const FormContain = styled.div`
    grid-area: m;
    width: 100%;
`

const CreatedTask = styled.div`
    grid-area: x;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    margin-top: 16px;

    @media (min-width: 660px) {
        justify-content: flex-end;
        margin-top: 0;
    }
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