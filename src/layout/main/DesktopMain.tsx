import React from "react";
import styled from "styled-components";
import {Form} from "../../components/form/Form";

export const DesktopMain: React.FC = () => {
    return (
        <MainStyled>
            <HeaderTask>
                <span>Подзадача</span>
                <ButtonForm>Создать</ButtonForm>
            </HeaderTask>
            <CreatedTask>
                <ButtonForm>Сохранить</ButtonForm>
                <ButtonForm>Сохранить и выйти</ButtonForm>
            </CreatedTask>
            <FormContain>
                <Form/>
            </FormContain>

        </MainStyled>
    );
};


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
    margin: 5px;
    height: 32px;
`