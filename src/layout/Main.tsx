import React from "react";
import styled from "styled-components";

export const Main : React.FC = () => {
    return (
        <MainStyled>
            <div>
                <span>Подзадача</span>
                <button>Создать</button>
            </div>
            <div>
                <button>Сохранить</button>
                <button>Сохранить и выйти</button>
            </div>
            <div>
                <form>
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
                </form>
            </div>
        </MainStyled>
    )
}

const MainStyled = styled.div`
    padding-top: 16px;
    border-right: 1px solid #d5d8dd;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    background: #fff;
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
    display: flex;
    flex-direction: row;
`

const ElementTask = styled.div`
    width: 100%;
    max-width: 768px;
    justify-content: space-evenly;
    gap: 16px;
`

const ElementTaskName = styled.h3`
    font-size: 14px;
`

const InputForm = styled.input`
    width: 95%;
    border: 1px solid #d5d8dd;
    border-radius: 4px;
    padding: 6px 8px;
    height: 32px;
    font-size: 14px;
    background: #fcfcfd;
`