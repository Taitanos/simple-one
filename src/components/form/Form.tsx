import React from "react";
import styled from "styled-components";

export const Form: React.FC = () => {
    return (
        <FormStyled>
            <FormTask>STSK0004783 На инциденте, запросе, проблеме, в статусе закрыто некоторые поля остаются редактируемыми для агента если он Caller</FormTask>
            <FormElement>
                <ElementTask>
                    <ElementTaskName>Тема</ElementTaskName>
                    <InputForm type={"text"} value={"На инциденте, запросе, проблеме, в статусе закрыто некоторые поля остаются редактируемыми для агента если он Caller"}/>
                </ElementTask>
                <ElementTask>
                    <ElementTaskName>Статус</ElementTaskName>
                    <InputForm type={"text"} value={"Новая"}/>
                </ElementTask>
            </FormElement>
        </FormStyled>
    )
}

const FormStyled = styled.form`
`

const FormTask = styled.h2`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    display: block;
    font-size: 24px;
`

const FormElement = styled.div`
    width: 100%;
    //max-width: 1534px;
    gap: 16px;
    display: flex;
    flex-direction: row;
`

const ElementTask = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
`

const ElementTaskName = styled.h3`
    font-size: 14px;
`

const InputForm = styled.input`
    border: 1px solid #d5d8dd;
    border-radius: 4px;
    padding: 6px 8px;
    height: 32px;
    font-size: 14px;
    background: #fcfcfd;
`