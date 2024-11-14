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
            <FormElement>
                <ElementTask>
                    <ElementTaskName>Описание</ElementTaskName>
                    <InputForm type={"text"} value={""}/>
                </ElementTask>
                <ElementTask>
                    <ElementTaskName>Продукт</ElementTaskName>
                    <InputForm type={"text"} value={"Platform"}/>
                </ElementTask>
            </FormElement>
            <FormElement>
                <ElementTask>
                    <ElementTaskName>Ответственный</ElementTaskName>
                    <InputForm type={"text"} value={"Константин Константинопольский"}/>
                </ElementTask>
                <ElementTask>
                    <ElementTaskName>Группа</ElementTaskName>
                    <InputForm type={"text"} value={"Support Group"}/>
                </ElementTask>
            </FormElement>
            <FormElement>
                <ElementTask>
                    <ElementTaskName>Комментарии</ElementTaskName>
                    <InputForm type={"text"} value={""}/>
                </ElementTask>
            </FormElement>
            <FormElement>
                <ElementTask>
                    <ElementTaskName>Согласующие</ElementTaskName>
                    <InputForm type={"text"} value={"Андрей Пивоваров, Максим Галактионов, Алла Лин, Константин Константинопольский Константинович, Игорь Иванченко, Юлия Эйчаровна, Артем Подпрыгайко-Саппортов, Илья Вазнец, Михаил Вортенов, Наталья Нашевна, Евгения Итамовна, Алиса Киральчук"}/>
                </ElementTask>
            </FormElement>
            <FormElement>
                <ElementTask>
                    <ElementTaskName>Когда открыто</ElementTaskName>
                    <InputForm type={"text"} value={""}/>
                </ElementTask>
                <ElementTask>
                    <ElementTaskName>Когда создано</ElementTaskName>
                    <InputForm type={"text"} value={"22.10.2024"}/>
                </ElementTask>
            </FormElement>
            <FormElement>
                <ElementTask>
                    <ElementTaskName>Кем открыто</ElementTaskName>
                    <InputForm type={"text"} value={"Андрей Пивоваров"}/>
                </ElementTask>
                <ElementTask>
                    <ElementTaskName>Кем создано</ElementTaskName>
                    <InputForm type={"text"} value={"Андрей Пивоваров"}/>
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