import React from "react";
import styled from "styled-components";
import {Button} from "../button/Button";

export const Form: React.FC = () => {
    return (
        <FormStyled>
            <FormTask>STSK0004783 На инциденте, запросе, проблеме, в статусе закрыто некоторые поля остаются
                редактируемыми для агента если он Caller</FormTask>
            <FormElement>
                <ElementTask>
                    <ElementTaskName>Тема</ElementTaskName>
                    <InputForm type={"text"}
                               value={"На инциденте, запросе, проблеме, в статусе закрыто некоторые поля остаются редактируемыми для агента если он Caller"}/>
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
                    <ElementTaskForm>
                        <InputForm type={"text"} value={"Platform"}/>
                        <Button margin={"0"} iconId={"searchTask"} viewBox={"-2 -4 24 24"}/>
                    </ElementTaskForm>
                </ElementTask>
            </FormElement>
            <FormElement>
                <ElementTask>
                    <ElementTaskName>Рабочие заметки</ElementTaskName>
                    <InputForm type={"text"}
                               value={"Проверить ACL id=172830402014193655"}/>
                </ElementTask>
                <ElementTask>
                    <ElementTaskName>Приоритет</ElementTaskName>
                    <InputForm type={"text"} value={"Средний"}/>
                </ElementTask>
            </FormElement>
            <FormElement>
                <ElementTask>
                    <ElementTaskName>Ответственный</ElementTaskName>
                    <ElementTaskForm>
                        <InputForm type={"text"} value={"Константин Константинопольский"}/>
                        <Button margin={"0"} iconId={"plus"} viewBox={"-2 -4 24 24"}/>
                        <Button margin={"0"} iconId={"searchTask"} viewBox={"-2 -4 24 24"}/>
                    </ElementTaskForm>
                </ElementTask>
                <ElementTask>
                    <ElementTaskName>Группа</ElementTaskName>
                    <ElementTaskForm>
                        <InputForm type={"text"} value={"Support Group"}/>
                        <Button margin={"0"} iconId={"plus"} viewBox={"-2 -4 24 24"}/>
                        <Button margin={"0"} iconId={"searchTask"} viewBox={"-2 -4 24 24"}/>
                    </ElementTaskForm>
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
                    <ElementTaskForm>
                        <InputForm type={"text"}
                                   value={"Андрей Пивоваров, Максим Галактионов, Алла Лин, Константин Константинопольский Константинович, Игорь Иванченко, Юлия Эйчаровна, Артем Подпрыгайко-Саппортов, Илья Вазнец, Михаил Вортенов, Наталья Нашевна, Евгения Итамовна, Алиса Киральчук"}/>
                        <Button margin={"0"} iconId={"plus"} viewBox={"-2 -4 24 24"}/>
                        <Button margin={"0"} iconId={"searchTask"} viewBox={"-2 -4 24 24"}/>
                    </ElementTaskForm>
                </ElementTask>
            </FormElement>
            <FormElement>
                <ElementTask>
                    <ElementTaskName>Когда открыто</ElementTaskName>
                    <ElementTaskForm>
                        <InputForm type={"text"} value={""}/>
                        <Button margin={"0"} iconId={"calendar"} viewBox={"-2 -4 24 24"}/>
                    </ElementTaskForm>
                </ElementTask>
                <ElementTask>
                    <ElementTaskName>Когда создано</ElementTaskName>
                    <ElementTaskForm>
                        <InputForm type={"text"} value={"22.10.2024"}/>
                        <Button margin={"0"} iconId={"calendar"} viewBox={"-2 -4 24 24"}/>
                    </ElementTaskForm>
                </ElementTask>
            </FormElement>
            <FormElement>
                <ElementTask>
                    <ElementTaskName>Кем открыто</ElementTaskName>
                    <ElementTaskForm>
                        <InputForm type={"text"} value={"Андрей Пивоваров"}/>
                        <Button margin={"0"} iconId={"plus"} viewBox={"-2 -4 24 24"}/>
                        <Button margin={"0"} iconId={"searchTask"} viewBox={"-2 -4 24 24"}/>
                    </ElementTaskForm>
                </ElementTask>
                <ElementTask>
                    <ElementTaskName>Кем создано</ElementTaskName>
                    <ElementTaskForm>
                        <InputForm type={"text"} value={"Андрей Пивоваров"}/>
                        <Button margin={"0"} iconId={"plus"} viewBox={"-2 -4 24 24"}/>
                        <Button margin={"0"} iconId={"searchTask"} viewBox={"-2 -4 24 24"}/>
                    </ElementTaskForm>
                </ElementTask>
            </FormElement>
        </FormStyled>
    )
}


const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    //width: 100%;
    //max-width: 1546px;
`

const FormTask = styled.h2`
    white-space-collapse: collapse;
    //white-space: nowrap;
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
    //gap: 16px;
`

const ElementTaskForm = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 4px;
`

const ElementTaskName = styled.h3`
    font-size: 14px;
`

const InputForm = styled.input`
    border: 1px solid #d5d8dd;
    border-radius: 4px;
    padding: 6px 8px;
    height: 18px;
    font-size: 14px;
    background: #fcfcfd;
    flex-grow: 1;
`